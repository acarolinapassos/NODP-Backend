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
};


function abrirModal (elemento) {
  console.log(elemento);
  console.log(elemento.dataset.apoiado_id);
apoiado_id=elemento.dataset.apoiado_id;
$('#modalDeApoiados').modal('show');

}

async function desapoiar () {
  $('#modalDeApoiados').modal('hide');
  try {
    let promise = await fetch("/users/apoiar", {
      body: JSON.stringify({ apoiado_id }),
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      }
      
    });
    let result = await promise;
    return result;

  } catch (error) {
    console.log(error);
    swal("Error", "Não foi possível desapoiar este usuário", "error");
  }
}

async function tentarDesapoiar () {
  let result = await desapoiar();
  if (!result.ok) {
    swal("Error", "Não foi possível desapoiar este usuário", "error");
    
  } else {
    location.reload()
  }
  
}

