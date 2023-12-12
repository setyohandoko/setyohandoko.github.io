const handlerSubmit = (e) => {
  window.dataLayer = window.dataLayer || [];

  const promoCode = document.querySelector('#in-promocode').value;
  const orderId = generateRandomString(5);
  const payload = {
    orderId,
    orderDiscount: generateRandomDecimal(0, 10),
    promoCode,
    items: [
      {
        category: 'HEADSET',
        sku: generateRandomString(13),
        quantity: 5,
        subTotal: generateRandomDecimal(0, 10),
      },
      {
        category: 'HEADSET',
        sku: generateRandomString(13),
        quantity: 10,
        subTotal: generateRandomDecimal(0, 10),
      },
    ],
  };

  dataLayer.push(payload);
  window.location.href = `checkout.html?orderId=${orderId}`;

  e.preventDefault();
};

document.querySelector('#my-form').addEventListener('submit', handlerSubmit);

function generateRandomString(length) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function generateRandomDecimal(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}
