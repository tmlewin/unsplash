function get_image(){
    let key = 'PLACE YOUR API KEY HERE';
    let uri = 'https://api.unsplash.com/photos/random/?client_id='

    fetch(uri+key)
    .then((response) =>{
        return response.json()
    })
    .then((data) =>{
         console.log(data)
         let result = `<img src=${data.urls.small}/>
         <h3>${data.description ? data.description : data.alt_description}</h3>`
         document.body.style.background = data.color
         document.getElementById('container').innerHTML = result
    })
    .catch((error) =>{
        console.log(error)
    })
}