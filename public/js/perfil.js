const IMG_CAPA = document.querySelector('#header .imagem-background');
const IMG_AVATAR = document.querySelector('#header .avatar');
const INPUT_CAPA = document.getElementById('capa');
const INPUT_AVATAR = document.getElementById('avatar');
const INPUT_LIMITE_CARACTERES = document.getElementById('limite-caracteres');
const INPUT_OBJETIVO = document.getElementById('input-objetivo');


const adicionar_avatar = (event) => {
  event.preventDefault();
  event.stopPropagation();
  INPUT_AVATAR.click();
};

const adicionar_capa = () => {
  INPUT_CAPA.click();
};

const carregar_imagem = async (event) => {
  let INPUT = event.target;
  var reader = new FileReader();
  reader.onload = async function () {
    var dataUrl = await reader.result;
    switch (INPUT.name.toUpperCase()) {
      case "CAPA":
        IMG_CAPA.style.backgroundImage = `url("${dataUrl}")`;
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

IMG_CAPA.addEventListener('click', adicionar_capa);
IMG_AVATAR.addEventListener('click', adicionar_avatar);

INPUT_CAPA.addEventListener('change', async function (event) {
 carregar_imagem(event);
});

INPUT_AVATAR.addEventListener('change', async function (event) {
  carregar_imagem(event);
});

INPUT_OBJETIVO.addEventListener('keyup', function () {
  var qtd = parseInt((this.value.length));
  INPUT_LIMITE_CARACTERES.textContent = 250 - qtd;
});