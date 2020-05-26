const IMG_MOBILE = document.getElementById('imagem_upload_mobile');
const INPUT_FILE_MOBILE = document.getElementById('input_file_mobile');

const IMG_APRENDER = document.getElementById('img_upload_aprender');
const INPUT_FILE_APRENDER = document.getElementById('input_upload_aprender');

const IMG_APRENDENDO = document.getElementById('img_upload_aprendendo');
const INPUT_FILE_APRENDENDO = document.getElementById('input_upload_aprendendo');



const adicionar_img_mobile = (event) => {
  event.preventDefault();
  event.stopPropagation();
  INPUT_FILE_MOBILE.click();
};

const adicionar_img_aprender = () => {
  event.preventDefault();
  event.stopPropagation();
  INPUT_FILE_APRENDER.click();
};

const adicionar_img_aprendendo = () => {
  event.preventDefault();
  event.stopPropagation();
  INPUT_FILE_APRENDENDO.click();
};



const carregar_imagem = async (event) => {
  let INPUT = event.target;
  var reader = new FileReader();
  console.log(INPUT.id.toUpperCase());
  reader.onload = async function () {
    var dataUrl = await reader.result;
    switch (INPUT.id.toUpperCase()) {
      case 'INPUT_FILE_MOBILE':
        IMG_MOBILE.style.backgroundImage = `url("${dataUrl}")`;
        break;
      case 'AVATAR':
        IMG_AVATAR.src = dataUrl;
        break;
        case 'INPUT_UPLOAD_APRENDER':
        IMG_APRENDER.style.backgroundImage = `url("${dataUrl}")`;
        break;
        case 'INPUT_UPLOAD_APRENDENDO':
        IMG_APRENDENDO.style.backgroundImage = `url("${dataUrl}")`;
        break;
      default:
        break;
    }
  };
  await reader.readAsDataURL(INPUT.files[0]);
};

//Realizar upload de imagem modal mobile
IMG_MOBILE.addEventListener('click', adicionar_img_mobile);
INPUT_FILE_MOBILE.addEventListener('change', async function (event) {
  carregar_imagem(event);
});

//Realizar upload de imagem modal aprender desktop
IMG_APRENDER.addEventListener('click', adicionar_img_aprender);
INPUT_FILE_APRENDER.addEventListener('change', async function (event) {
  carregar_imagem(event);
});

//Realizar upload de imagem modal aprendendo desktop
IMG_APRENDENDO.addEventListener('click', adicionar_img_aprendendo);
INPUT_FILE_APRENDENDO.addEventListener('change', async function (event) {
  carregar_imagem(event);
});

