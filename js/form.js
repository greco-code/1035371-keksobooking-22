import {showSendErrorMessage} from './error.js';
import {sendData} from './server.js';
import {fillAddressInput} from './map.js';
import {showSendSuccessMessage} from './success.js';
import {resetMarker} from './map.js';

const mainForm = document.querySelector('.ad-form');
const timeIn = mainForm.querySelector('#timein');
const timeOut = mainForm.querySelector('#timeout');
const priceInput = mainForm.querySelector('#price');
const propertyType = mainForm.querySelector('#type');
const addressInput = mainForm.querySelector('#address');
const resetFormButton = mainForm.querySelector('.ad-form__reset')

const priceToType = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const onSelectCheckChange = (evt) => {
  const {value} = evt.target;

  timeOut.value = value;
  timeIn.value = value;
}

const onSelectTypeChange = () => {
  priceInput.min = priceToType[propertyType.value];
  priceInput.placeholder = priceToType[propertyType.value];
}

const validateForm = () => {
  onSelectTypeChange();
  propertyType.addEventListener('change', onSelectTypeChange);
  timeIn.addEventListener('change', onSelectCheckChange);
  timeOut.addEventListener('change', onSelectCheckChange);
}

addressInput.readOnly = true;

const resetForm = () => {
  // mainForm.reset = true;
  //todo не работает
  fillAddressInput();
}

resetFormButton.addEventListener('click', () => {
  resetForm();
  resetMarker();
})

const successHandler = () => {
  showSendSuccessMessage();
  resetForm();
  resetMarker();
}

mainForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  sendData(successHandler, showSendErrorMessage, formData)
});


export {validateForm};

