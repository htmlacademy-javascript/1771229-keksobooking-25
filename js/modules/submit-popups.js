import {clearFiltersAndForm} from './interaction-with-form.js';
const CANCEL_SUBMIT_MESSAGE_KEY = 'Escape';
const adFormElement=document.querySelector('.ad-form');
const bodyElement = document.querySelector('body');
const mapFiltersElement=document.querySelector('.map__filters');

const removePopup = (evt, isSuccessful) =>{
  let submitMessageElement;
  if (isSuccessful){
    submitMessageElement = bodyElement.querySelector('.success');
    // eslint-disable-next-line no-use-before-define
    removeSuccessPopupListeners();
  } else {
    submitMessageElement = bodyElement.querySelector('.error');
    // eslint-disable-next-line no-use-before-define
    removeOnSubmitErrorMessage();
  }
  submitMessageElement.remove();
};

const clickOnSuccess = (evt) =>{
  removePopup(evt, true);
};
const keyOnSuccess = (evt) =>{
  if (evt.key === CANCEL_SUBMIT_MESSAGE_KEY) {
    removePopup(evt, true);
  }
};

const keyOnError = (evt) =>{
  if (evt.key === CANCEL_SUBMIT_MESSAGE_KEY) {
    removePopup(evt, false);
  }
};

const clickOnError = (evt) =>{
  removePopup(evt, false);
};
const buttonClickOnError = (evt) =>{
  evt.stopPropagation();
  removePopup(evt, false);
};


//popupcreators
const  createSuccessPopup = () =>{
  adFormElement.reset();
  clearFiltersAndForm();
  const submitMessageElement = document.querySelector('#success').content.cloneNode(true);
  bodyElement.appendChild(submitMessageElement);
  mapFiltersElement.reset();

  window.addEventListener('keydown', keyOnSuccess);
  window.addEventListener('click', clickOnSuccess);
};


const  createErrorPopup = () =>{
  const submitMessageElement = document.querySelector('#error').content.cloneNode(true);
  const closeButton = submitMessageElement.querySelector('.error__button');
  bodyElement.appendChild(submitMessageElement);

  window.addEventListener('keydown', keyOnError);
  window.addEventListener('click', clickOnError);
  closeButton.addEventListener('click', buttonClickOnError);

};

const removeSuccessPopupListeners = () => {
  window.removeEventListener('keydown', keyOnSuccess);
  window.removeEventListener('click', clickOnSuccess);
};

const removeOnSubmitErrorMessage = () => {
  const submitMessageElement = document.querySelector('.error');
  const closeButton = submitMessageElement.querySelector('.error__button');

  window.removeEventListener('keydown', keyOnError);
  window.removeEventListener('click', clickOnError);
  closeButton.removeEventListener('click', buttonClickOnError);

};

export { createSuccessPopup,  createErrorPopup};
