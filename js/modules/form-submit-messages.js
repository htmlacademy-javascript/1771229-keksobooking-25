const bodyElement = document.querySelector('body');
const adFormElement=document.querySelector('.ad-form');
const mapFiltersElement=document.querySelector('.map__filters');

const removeOnSubmitMessage = (isSuccessful) =>{
  let submitMessageElement;
  if (isSuccessful){
    submitMessageElement = bodyElement.querySelector('.success');
    removeOnSubmitSuccessMessageHandler();
  }
  else if (!isSuccessful){
    submitMessageElement = bodyElement.querySelector('.error');
    removeOnSubmitErrorMessageHandler();
  }
  submitMessageElement.remove();
};


const escOnSubmitSuccessMessageHandler = (evt) =>{
  if (evt.key === 27) {
    removeOnSubmitMessage(true);
  }
};

const clickOnSubmitSuccessMessageHandler = () =>{
  removeOnSubmitMessage(true);
};

const escOnSubmitErrorMessageHandler = (evt) =>{
  if (evt.key === 27) {
    removeOnSubmitMessage(true);
  }
};

const clickOnSubmitErrorMessageHandler = () =>{
  removeOnSubmitMessage(true);
};

const buttonOnSubmitErrorMessageHandler = () =>{
  removeOnSubmitMessage(false);
};


//popupcreators
const  createSuccessPopup = () =>{
  const submitMessageElement = document.querySelector('#success').content.cloneNode(true);
  bodyElement.appendChild(submitMessageElement);
  adFormElement.reset();
  mapFiltersElement.reset();

  window.addEventListener('keydown', (evt) => escOnSubmitSuccessMessageHandler(evt));
  window.addEventListener('click', clickOnSubmitSuccessMessageHandler);
};


const  createErrorPopup = () =>{
  const submitMessageElement = document.querySelector('#error').content.cloneNode(true);
  const closeButton = submitMessageElement.querySelector('.error__button');
  bodyElement.appendChild(submitMessageElement);

  window.addEventListener('keydown', (evt) => escOnSubmitErrorMessageHandler(evt));
  submitMessageElement.addEventListener('click', clickOnSubmitErrorMessageHandler);
  closeButton.addEventListener('click', buttonOnSubmitErrorMessageHandler);

};

const removeOnSubmitSuccessMessageHandler = () => {
  window.removeEventListener('keydown', (evt) => escOnSubmitSuccessMessageHandler(evt));
  window.removeEventListener('click', clickOnSubmitSuccessMessageHandler);
};

const removeOnSubmitErrorMessageHandler = () => {
  const submitMessageElement = document.querySelector('.error');
  const closeButton = submitMessageElement.querySelector('.error__button');
  window.removeEventListener('keydown', (evt) => escOnSubmitErrorMessageHandler(evt));
  submitMessageElement.removeEventListener('click', clickOnSubmitErrorMessageHandler);
  closeButton.removeEventListener('click', buttonOnSubmitErrorMessageHandler);
};

export { createSuccessPopup,  createErrorPopup};
