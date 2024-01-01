const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const clickId = urlParams.get('irclickid');

localStorage.setItem('clickId', clickId ?? '');
