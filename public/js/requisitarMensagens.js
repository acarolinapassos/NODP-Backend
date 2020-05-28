
function carregar(){
    fetch('/users/mensagens', {
        method: "GET",
        headers: {
            contentType: ''
        }
    }).then(res => 
        console.log(`ENVIANDO ${JSON.stringify(res)}`))
}

carregar();