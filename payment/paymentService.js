const mercadopago = require('mercadopago');

mercadopago.configurations.setAccessToken('APP_USR-8101026874292077-101721-08438cf8d2ed21fe5947641f4ae99cd8-2015493826');

const createPaymentFromService = async (createPaymentDto, id) => {
  const preferenceData = {
    items: [
      {
        title: createPaymentDto.title,
        quantity: Number(createPaymentDto.quantity),
        unit_price: Number(createPaymentDto.price),
        currency_id: 'ARS',
      },
    ],
    back_urls: {
      success: 'https://ecommerceback-server.onrender.com/webhook',
      failure: 'http://localhost:5173/user/allcredits',
      pending: 'http://localhost:5173/user/allcredits',
    },
    auto_return: 'approved',
    external_reference: id,
  };

  try {
    const preference = await mercadopago.preferences.create(preferenceData);
    return preference.body;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createPaymentFromService,
};
