if (location.pathname=="/cadastro"){
let form = document.getElementById('form-cadastro');

form.addEventListener('click', function () {
  localStorage.setItem('nodp_key', '1');
})
}