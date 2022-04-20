const ACCEPTABLE_FILES = ['gif', 'jpg', 'jpeg', 'png'];
const avatarChooser = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview').firstChild;
const photoChooser = document.querySelector('#images');
const photoPreview = document.querySelector('.ad-form__photo');


const imageListeners = () => {
  avatarChooser.addEventListener('change', () => {
    const file = avatarChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches =  ACCEPTABLE_FILES.some((it) => fileName.endsWith(it));

    if (matches) {
      console.log(avatarPreview);
      avatarPreview.src = URL.createObjectURL(file);
    }
  });

  photoChooser.addEventListener('change', () => {
    const file = photoChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches =  ACCEPTABLE_FILES.some((it) => fileName.endsWith(it));

    if (matches) {
      photoPreview.src = URL.createObjectURL(file);
      console.log(photoPreview);
    }
  });
};

export {imageListeners};
