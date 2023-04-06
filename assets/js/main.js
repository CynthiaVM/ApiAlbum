async function saveAlbum(){
    const userID= document.getElementById("userID").value;
    const title= document.getElementById("title").value;


if(userID == 0 || title == "" ) {
    return alert ("Los campos solicitados no pueden ser nulos")
} 
//para verficar que no aparezcan vacios
//console.log("Funciona")
//POST
 // https://jsonplaceholder.typicode.com/posts
    // {
    //     "userId" : 3,
    //     "title": "Probando"
    // }
// crearmos y convertimos a json nuestro obj

const data = {"userId":userID,"title":title}
const dataJson = JSON.stringify(data)

// Request 
const response = await fetch('https://jsonplaceholder.typicode.com/albums',{
 method: 'POST',
 headers: {
     'Content-Type': 'application/json'
 },
 body:dataJson
})

const responseData = await response.json()
console.log(responseData)
document.getElementById("respuesta").innerHTML = `
<h2>Se creo correctamente el album</h2> 
<p>id: ${responseData.id} y su titulo es: ${responseData.title}</p>`

document.getElementById("formularioAlbum").reset(); 

}