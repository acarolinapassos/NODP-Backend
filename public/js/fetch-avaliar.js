
var aula_id;
var nota;

async function avaliarAula () {
 
    if(nota=="" || nota==undefined){
      swal("Error", "Escolha a quantidade de estrelas", "error");
      return;
    };

    $('#modalAvaliar').modal('hide'); 
    try {
         const promise = await fetch("/users/avaliar", {
            body: JSON.stringify({ nota, aula_id, tipo_avaliacao:"2"}),
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
        console.log(error)
    }
};


function atribuirNota (elemento) {

 nota = elemento.dataset.nota;
 let iconesEstrela = document.querySelectorAll(".iconeEstrela");
 
 for (let i=0 ; i<iconesEstrela.length; i++){
   if(nota<=i){
    iconesEstrela[i].classList.add("far")
    iconesEstrela[i].classList.remove("fas")
   } else{
    iconesEstrela[i].classList.remove("far")
    iconesEstrela[i].classList.add("fas")
   }
 }
};


function definirAulaId(elemento) {
  aula_id = elemento.dataset.aula_id;
   
 };

 
 