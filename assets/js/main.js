function saveAlbum(){
    const userID= document.getElementById("userID").value;
    const title= document.getElementById("title").value;
if(userID == 0 || title == "" ) {
    return alert ("Los campos solicitados no pueden ser nulos")
} //para verficar que no aparezcan vacios
console.log("Funciona")
//POST
 // https://jsonplaceholder.typicode.com/posts
    // {
    //     "userId" : 3,
    //     "title": "Probando"
    // }

}