async function salvarMoeda (event) {

    let id = event.dataset.id_post;
    
    let quantidade_apoios = event.dataset.quantidade_apoios;
    try {
        const promise = await fetch("/users/moedas", {
            body: JSON.stringify({ id, quantidade_apoios }),
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!promise.ok) {
            alert("Não foi possível dar uma moeda");
            return;
       }
       let reacoes = event.querySelector('.reacoes');
        let nr = parseInt(reacoes.textContent) + 1;
        reacoes.textContent = nr;

    } catch (error) {
        console.log(error)
    }
}