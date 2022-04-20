import {validateOffer, setUserFormSubmit} from './modules/interaction-with-form.js';
import {getData} from './modules/server-interfaces.js';
import { resetMap, updatePins, map} from './modules/map.js';
import {enablePage, disablePage} from './modules/toggle-page.js';
import {imageListeners} from './modules/images-upload.js';

disablePage();
map.whenReady(() => {
  enablePage();
});
imageListeners();
validateOffer();
getData(updatePins);
resetMap();
setUserFormSubmit();
