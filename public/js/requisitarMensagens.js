
function carregar(){
    fetch('/users/mensagens', {
        method: "GET",
    }).then(res => 
        console.log(`ENVIANDO ${JSON.stringify(res)}`))
}

carregar();