let apoiado_id;
function definirId(element) {
  apoiado_id = element.dataset.apoiador_id;
}

async function apoiar() {
  $('#modalDeApoiar').modal('hide'); 
  try {
    const promise = await fetch("/users/apoiar", {
      body: JSON.stringify({ apoiado_id }),
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }
    });
    if (!promise.ok) {
      swal("Error", "Não foi possível apoiar este usuário", "error");
      return;
    }
  } catch (error) {
    console.log(error);
  }
}