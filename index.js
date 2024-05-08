const api = "https://jsonplaceholder.typicode.com/"
let atributo = 'users'
const request = new XMLHttpRequest()
let array = []
const ContenedorDatos = document.getElementById('ContenedorDatos')
const linkUsers = document.getElementById('linkUsers')
const linkPosts = document.getElementById('linkPosts')
const linkComments = document.getElementById('linkComments')
const linkAlbums = document.getElementById('linkAlbums')
const linkPhtos = document.getElementById('linkPhtos')
linkUsers.onclick = cargarUsuarios
linkPosts.onclick = cargarPosts
linkComments.onclick = cargarComentarios
linkAlbums.onclick = cargarAlbums
linkPhtos.onclick = cargarFotos



request.onload = function (){
    const data = JSON.parse(this.response)
    array = data;
    if(atributo == 'users'){
        mostrarUsuarios(array)
    }else if(atributo == 'photos'){
        mostrarFotos(array)
    }else if(atributo == 'posts'){
        mostrarPosts(array)
    }else if(atributo == 'albums'){
        mostrarPosts(array)
    }else if(atributo == 'comments') {
        mostrarComentarios(array)
    }
}
function cargar(){
    ContenedorDatos.innerHTML = ''
    request.open('GET', api + atributo)
    request.send();
}
function cargarUsuarios(){
    atributo = 'users'
    cargar();  
}

function cargarPosts(){
    atributo = 'posts'
    cargar()
}
function cargarComentarios(){
    atributo = 'comments'
    cargar()
}
function cargarAlbums(){
    atributo = 'albums'
    cargar()
}
function cargarFotos(){
    atributo = 'photos'
    cargar()
}
function mostrarUsuarios(usuarios){
    for(let i = 0; i < usuarios.length; i++){
        const targetaUser = document.createElement('div')
        const id = document.createElement('h5');
        const name = document.createElement('h5');
        const username = document.createElement('h5');
        const email = document.createElement('h5');

        id.textContent = array[i].id
        name.textContent = array[i].name
        username.textContent = array[i].username
        email.textContent = array[i].email

        targetaUser.appendChild(id)
        targetaUser.appendChild(name)
        targetaUser.appendChild(username)
        targetaUser.appendChild(email)

        ContenedorDatos.appendChild(targetaUser)
    }
}
function mostrarFotos(fotos){
    for(let i = 0; i < fotos.length; i++){
        const targetaPhotos = document.createElement('div')
        const id = document.createElement('h5');
        const title = document.createElement('h5');
        const url = document.createElement('img');
        const albumId = document.createElement('h5');

        id.textContent = array[i].id
        title.textContent = array[i].title
        url.src = array[i].thumbnailUrl
        albumId.textContent = array[i].albumId

        targetaPhotos.appendChild(albumId)
        targetaPhotos.appendChild(id)
        targetaPhotos.appendChild(title)
        targetaPhotos.appendChild(url)

        ContenedorDatos.appendChild(targetaPhotos)
    }
}
function mostrarPosts(posts){
    for(let i = 0; i < posts.length; i++){
        const targetaUser = document.createElement('div')
        const id = document.createElement('h5');
        const title = document.createElement('h5');
        const userId = document.createElement('h5');
        const body = document.createElement('h5');

        id.textContent = array[i].id
        userId.textContent = array[i].userId
        title.textContent = array[i].title
        body.textContent = array[i].body

        targetaUser.appendChild(userId)
        targetaUser.appendChild(id)
        targetaUser.appendChild(title)
        targetaUser.appendChild(body)

        ContenedorDatos.appendChild(targetaUser)
    }
}
function mostrarComentarios(comments){
    for(let i = 0; i < comments.length; i++){
        const targetaUser = document.createElement('div')
        const id = document.createElement('h5');
        const name = document.createElement('h5');
        const postId = document.createElement('h5');
        const email = document.createElement('h5');
        const body = document.createElement('h5');

        id.textContent = array[i].id
        postId.textContent = array[i].postId
        name.textContent = array[i].name
        body.textContent = array[i].body
        email.textContent = array[i].email

        targetaUser.appendChild(postId)
        targetaUser.appendChild(id)
        targetaUser.appendChild(name)
        targetaUser.appendChild(email)
        targetaUser.appendChild(body)

        ContenedorDatos.appendChild(targetaUser)
    }
}