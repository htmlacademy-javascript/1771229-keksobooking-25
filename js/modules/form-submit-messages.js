import {clearFiltersAndForm} from './interaction-with-form.js';
const CANCEL_SUBMIT_MESSAGE_KEY = 'Escape';
const adFormElement=document.querySelector('.ad-form');
const bodyElement = document.querySelector('body');
const mapFiltersElement=document.querySelector('.map__filters');

const removeOnSubmitMessage = (evt, isSuccessful) =>{
  let submitMessageElement;
  if (isSuccessful){
    submitMessageElement = bodyElement.querySelector('.success');
    removeOnSubmitSuccessMessage();
  } else {
    submitMessageElement = bodyElement.querySelector('.error');
    removeOnSubmitErrorMessage(evt);
  }
  submitMessageElement.remove();
};

const clickOnSubmitSuccessMessage = (evt) =>{
  removeOnSubmitMessage(evt, true);
};
const keyOnSubmitSuccessMessage = (evt) =>{
  if (evt.key === CANCEL_SUBMIT_MESSAGE_KEY) {
    removeOnSubmitMessage(evt, true);
  }
};

const keyOnSubmitErrorMessage = (evt) =>{
  if (evt.key === CANCEL_SUBMIT_MESSAGE_KEY) {
    removeOnSubmitMessage(evt, false);
  }
};

const clickOnSubmitErrorMessage = (evt) =>{
  removeOnSubmitMessage(evt, false);
};
const buttonOnSubmitErrorMessage = (evt) =>{
  evt.stopPropagation();
  removeOnSubmitMessage(evt, false);
};


//popupcreators
const  createSuccessPopup = () =>{
  adFormElement.reset();
  // TEST \/
  clearFiltersAndForm();
  const submitMessageElement = document.querySelector('#success').content.cloneNode(true);
  bodyElement.appendChild(submitMessageElement);
  mapFiltersElement.reset();

  window.addEventListener('keydown', keyOnSubmitSuccessMessage);
  window.addEventListener('click', clickOnSubmitSuccessMessage);
};


const  createErrorPopup = () =>{
  const submitMessageElement = document.querySelector('#error').content.cloneNode(true);
  const closeButton = submitMessageElement.querySelector('.error__button');
  bodyElement.appendChild(submitMessageElement);

  window.addEventListener('keydown', keyOnSubmitErrorMessage);
  window.addEventListener('click', clickOnSubmitErrorMessage);
  closeButton.addEventListener('click', buttonOnSubmitErrorMessage);

};

const removeOnSubmitSuccessMessage = () => {
  window.removeEventListener('keydown', keyOnSubmitSuccessMessage);
  window.removeEventListener('click', clickOnSubmitSuccessMessage);
};

const removeOnSubmitErrorMessage = () => {
  const submitMessageElement = document.querySelector('.error');
  const closeButton = submitMessageElement.querySelector('.error__button');

  window.removeEventListener('keydown', keyOnSubmitErrorMessage);
  window.removeEventListener('click', clickOnSubmitErrorMessage);
  closeButton.removeEventListener('click', buttonOnSubmitErrorMessage);

};

export { createSuccessPopup,  createErrorPopup};
