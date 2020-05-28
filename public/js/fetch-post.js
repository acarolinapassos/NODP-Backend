async function salvarMedalhas (element) {
    //console.log(element.dataset.post_id);
    let id = element.dataset.id_post;
    try {
        const promise = await fetch ("/users/medalhas" , {
            body:JSON.stringify({id_post: id}),
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            }
        })
    } catch (error) {
        console.log(error)
    }
}
