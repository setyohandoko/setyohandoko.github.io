const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Get specific parameter values by key
const promoCode = urlParams.get('promoCode'); // Retrieves 'promoCode'
const orderIdDom = document.querySelector('#order-id');

const handlerSubmit = (e) => {
  window.dataLayer = window.dataLayer || [];
  const orderId = generateRandomString(5);
  const payload = {
    orderId:orderId,
    orderDiscount: generateRandomDecimal(0, 10),
    promoCode:promoCode,
    items: [
      {
        category: 'HEADSET',
        sku: generateRandomString(13),
        quantity: 5,
        subtotal: generateRandomDecimal(0, 10),
      },
      {
        category: 'HEADSET',
        sku: generateRandomString(13),
        quantity: 10,
        subtotal: generateRandomDecimal(0, 10),
      },
    ],
  };

  console.log('payload');
  console.log(payload);
  dataLayer.push(payload);
  orderIdDom.innerText = orderId;
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

handlerSubmit();