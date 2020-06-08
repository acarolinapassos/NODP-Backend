async function avaliarAula () {
    $('#modalAvaliar').modal('hide'); 
    try {
        const promise = await fetch("/users/avaliar", {
            body: JSON.stringify({ nota }),
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            }
          });
          if (!promise.ok) {
            swal("Error", "Não foi possível fazer avaliação", "error");
            return;
          }
    } catch (error) {
        
    }
};

let nota 



let elementoNota = document.querySelector(".nota");

elementoNota.addEventListener("click" , function (evento){evento.dataset.nota; console.log(evento)})