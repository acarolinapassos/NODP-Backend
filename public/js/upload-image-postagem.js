const IMG_MOBILE = document.getElementById('imagem_upload_mobile');
// const IMG_APRENDER = document.querySelector('#header .avatar');
// const IMG_ENSINAR = document.getElementById(elementId);
// const IMG_APRENDENDO = document.getElementById('avatar');
// const IMG_ENSINANDO = document.getElementById('capa');

const INPUT_FILE_MOBILE = document.getElementById('input_file_mobile');
// const INPUT_FILE_APRENDER = document.querySelector('#header .avatar');
// const INPUT_FILE_ENSINAR = document.getElementById('');
// const INPUT_FILE_APRENDENDO = document.getElementById('avatar');
// const INPUT_FILE_ENSINANDO = document.getElementById('capa');


const adicionar_img_mobile = (event) => {
  event.preventDefault();
  event.stopPropagation();
  INPUT_FILE_MOBILE.click();
};
// const adicionar_img_aprender = () => {
//   event.preventDefault();
//   event.stopPropagation();
//   INPUT_CAPA.click();
// };
// const adicionar_img_ensinar = () => {
//   event.preventDefault();
//   event.stopPropagation();
//   INPUT_CAPA.click();
// };
// const adicionar_img_ensinando = () => {
//   event.preventDefault();
//   event.stopPropagation();
//   INPUT_CAPA.click();
// };
// const adicionar_img_aprendendo = () => {
//   event.preventDefault();
//   event.stopPropagation();
//   INPUT_CAPA.click();
// };


const carregar_imagem = async (event) => {
  let INPUT = event.target;
  var reader = new FileReader();
  reader.onload = async function () {
    var dataUrl = await reader.result;
    switch (INPUT.id.toUpperCase()) {
      case "INPUT_FILE_MOBILE":
        IMG_MOBILE.style.backgroundImage = `url("${dataUrl}")`;
        break;
      case "AVATAR":
        IMG_AVATAR.src = dataUrl;
        break;
      default:
        break;
    }
  };
  await reader.readAsDataURL(INPUT.files[0]);
};

IMG_MOBILE.addEventListener('click', adicionar_img_mobile);
// IMG_AVATAR.addEventListener('click', adicionar_avatar);

INPUT_FILE_MOBILE.addEventListener('change', async function (event) {
  carregar_imagem(event);
});

// INPUT_AVATAR.addEventListener('change', async function (event) {
//   carregar_imagem(event);
// });