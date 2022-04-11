import {clearFiltersAndForm} from './interaction-with-form.js';
const CANCEL_SUBMIT_MESSAGE_KEY = 'Escape';
const adFormElement=document.querySelector('.ad-form');
const bodyElement = document.querySelector('body');
const mapFiltersElement=document.querySelector('.map__filters');

const removeOnSubmitMessage = (isSuccessful) =>{
  let submitMessageElement;
  if (isSuccessful){
    submitMessageElement = bodyElement.querySelector('.success');
    removeOnSubmitSuccessMessageHandler();
  }
  if (!isSuccessful){
    submitMessageElement = bodyElement.querySelector('.error');
    removeOnSubmitErrorMessageHandler();
  }
  submitMessageElement.remove();
};

const clickOnSubmitSuccessMessageHandler = () =>{
  removeOnSubmitMessage(true);
};
const keyOnSubmitSuccessMessageHandler = (evt) =>{
  if (evt.key === CANCEL_SUBMIT_MESSAGE_KEY) {
    removeOnSubmitMessage(true);
  }
};

const keyOnSubmitErrorMessageHandler = (evt) =>{
  if (evt.key === CANCEL_SUBMIT_MESSAGE_KEY) {
    removeOnSubmitMessage(false);
  }
};

const clickOnSubmitErrorMessageHandler = () =>{
  removeOnSubmitMessage(false);
};

const buttonOnSubmitErrorMessageHandler = () =>{
  removeOnSubmitMessage(false);
};


//popupcreators
const  createSuccessPopup = () =>{
  adFormElement.reset();
  clearFiltersAndForm();
  const submitMessageElement = document.querySelector('#success').content.cloneNode(true);
  bodyElement.appendChild(submitMessageElement);
  mapFiltersElement.reset();

  window.addEventListener('keydown', keyOnSubmitSuccessMessageHandler);
  window.addEventListener('click', clickOnSubmitSuccessMessageHandler);
};


const  createErrorPopup = () =>{
  const submitMessageElement = document.querySelector('#error').content.cloneNode(true);
  const closeButton = submitMessageElement.querySelector('.error__button');
  bodyElement.appendChild(submitMessageElement);

  window.addEventListener('keydown', (evt) => keyOnSubmitErrorMessageHandler(evt));
  window.addEventListener('click', clickOnSubmitErrorMessageHandler);
  closeButton.addEventListener('click', buttonOnSubmitErrorMessageHandler);

};

const removeOnSubmitSuccessMessageHandler = () => {
  window.removeEventListener('keydown', (evt) => keyOnSubmitSuccessMessageHandler(evt));
  window.removeEventListener('click', clickOnSubmitSuccessMessageHandler);
};

const removeOnSubmitErrorMessageHandler = () => {
  const submitMessageElement = document.querySelector('.error');
  const closeButton = submitMessageElement.querySelector('.error__button');
  window.removeEventListener('keydown', keyOnSubmitErrorMessageHandler);
  submitMessageElement.removeEventListener('click', clickOnSubmitErrorMessageHandler);
  closeButton.removeEventListener('click', buttonOnSubmitErrorMessageHandler);
};

export { createSuccessPopup,  createErrorPopup};
