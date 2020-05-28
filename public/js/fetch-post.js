async function salvarMedalhas (element) {
    let el = element;


    let id = element.dataset.id_post;
    try {
        const promise = await fetch("/users/medalhas", {
            body: JSON.stringify({ id_post: id }),
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        });

         if (!promise.ok) {
             alert("Não foi possível dar medalha");
             return;
        }

        let reacoes = el.querySelector('.reacoes');
        let nr = parseInt(reacoes.textContent) + 1;
        reacoes.textContent = nr;
        

    } catch (error) {
        console.log(error);
    }
}
