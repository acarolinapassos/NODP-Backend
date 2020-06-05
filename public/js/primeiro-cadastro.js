if (location.pathname=="/cadastro"){
let form = document.getElementById('form-cadastro');

  form.addEventListener('submit', function () {
    localStorage.setItem('nodp_key', '1');
  });
}