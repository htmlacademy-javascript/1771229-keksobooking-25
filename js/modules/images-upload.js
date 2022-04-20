const PHOTO_PREVIEW_WIDTH = 70;
const PHOTO_PREVIEW_LENGTH = 70;

const ACCEPTABLE_FILES = ['gif', 'jpg', 'jpeg', 'png'];
const avatarChooser = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview').querySelector('img');

const photoChooser = document.querySelector('#images');
const photoPreviewContainer = document.querySelector('.ad-form__photo');


const handleImageUpload = () => {
  avatarChooser.addEventListener('change', () => {
    const file = avatarChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches =  ACCEPTABLE_FILES.some((it) => fileName.endsWith(it));

    if (matches) {
      avatarPreview.src = URL.createObjectURL(file);
    }
  });

  photoChooser.addEventListener('change', () => {
    const file = photoChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches =  ACCEPTABLE_FILES.some((it) => fileName.endsWith(it));

    if (matches) {
      const photoPreview = document.createElement('img');
      photoPreview.width=PHOTO_PREVIEW_WIDTH;
      photoPreview.length=PHOTO_PREVIEW_LENGTH;
      photoPreview.src = URL.createObjectURL(file);
      photoPreviewContainer.innerHTML = '';
      photoPreviewContainer.appendChild(photoPreview);
    }
  });
};

export {handleImageUpload};
