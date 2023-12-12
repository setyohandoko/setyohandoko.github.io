const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Get specific parameter values by key
const orderId = urlParams.get('orderId'); // Retrieves 'value1'
const orderIdDom = document.querySelector('#order-id');
orderIdDom.innerText = orderId;
