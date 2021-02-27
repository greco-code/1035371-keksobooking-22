const mapContainer = document.querySelector('.map__canvas');
const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const documentFragment = document.createDocumentFragment();
const errorMessage = errorTemplate.cloneNode(true);

const showSendErrorMessage = () => {
  mapContainer.style.zIndex = 0;
  documentFragment.appendChild(errorMessage);
  document.body.appendChild(documentFragment);
}



const showGetErrorMessage = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = 'Ошибка получения данных';

  document.body.append(alertContainer);
}

export {
  showSendErrorMessage,
  showGetErrorMessage
}