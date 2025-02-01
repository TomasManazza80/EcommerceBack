import dotenv from 'dotenv';
import Vexor from 'vexor';
import createPaymentFromService from '../payment/paymentService.js';

dotenv.config();

const vexorInstance = new Vexor({
  publishableKey: process.env.VEXOR_PUBLISHABLE_KEY,
  projectId: process.env.VEXOR_PROJECT_ID,
  apiKey: process.env.VEXOR_API_KEY,
});

// Log para depuración
console.log('Clave pública:', process.env.VEXOR_PUBLISHABLE_KEY);
console.log('ID del proyecto:', process.env.VEXOR_PROJECT_ID);
console.log('Clave API:', process.env.VEXOR_API_KEY);

export const createPayment = async (req, res) => {
  const { product } = req.body;

  if (!product || !product.title || !product.unit_price || !product.quantity) {
    return res.status(400).json({ error: 'El producto debe tener título, precio y cantidad' });
  }

  try {
    console.log('Datos del producto:', product);
    
    const paymentResponse = await vexorInstance.pay.mercadopago({
      items: [
        {
          title: product.title,
          unit_price: product.unit_price,
          quantity: product.quantity,
        },
      ],
    });

    console.log('Respuesta de pago:', paymentResponse);

    if (paymentResponse && paymentResponse.payment_url) {
      res.status(200).json({ payment_url: paymentResponse.payment_url });
    } else {
      throw new Error('Respuesta de pago inválida');
    }
  } catch (error) {
    console.error('Error al crear el pago:', error);
    res.status(500).json({ error: 'Error al procesar el pago' });
  }
};

export const handleWebhook = async (req, res) => {
  try {
    const webhookData = req.body;
    console.log('Datos del webhook:', webhookData);

    const paymentId = webhookData.data.id;

    // Solicitar detalles del pago
    const payment = await createPaymentFromService(paymentId);

    if (payment && payment.status === 'approved') {
      const items = payment.items;
      console.log('Estos son mis Items:', items);

      for (const item of items) {
        const productId = item.id;
        const quantityPurchased = item.quantity;

        await productService.updateQuantityProduct(productId, quantityPurchased);
      }
    } else {
      console.error('Estado del pago no aprobado o datos incompletos:', payment);
      return res.status(400).json({ error: 'Pago no aprobado o datos incompletos' });
    }

    res.status(200).send('Webhook recibido');
  } catch (error) {
    console.error('Error al manejar el webhook:', error);
    res.status(500).json({ error: 'Error al procesar el webhook' });
  }
};
