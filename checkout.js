const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Get specific parameter values by key
const promoCode = urlParams.get('promoCode'); // Retrieves 'promoCode'
let orderId = '';

const handlerSubmit = (e) => {
  window.dataLayer = window.dataLayer || [];
  orderId = generateRandomString(5);
  const payload = {
    orderId: orderId,
    orderDiscount: generateRandomDecimal(0, 10),
    orderPromoCode: promoCode,
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

  console.log('payload');
  console.log(payload);
  dataLayer.push(payload);
};

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

document.addEventListener('DOMContentLoaded', () => {
  const orderIdDom = document.querySelector('#order-id');
  orderIdDom.textContent = orderId;
});
handlerSubmit();