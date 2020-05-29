let apoiado_id;

function definirId(element) {
  apoiado_id = element.dataset.apoiador_id;
}

async function apoiar() {
  alert("Entrou");
  try {
    const promise = await fetch("/users/apoiar", {
      body: JSON.stringify({ apoiado_id }),
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }
    });
    if (!promise.ok) {
      alert("Não foi possível apoiar");
      return;
    }


  } catch (error) {
    console.log(error);
  }
}