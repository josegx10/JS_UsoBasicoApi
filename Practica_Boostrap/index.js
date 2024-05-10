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
const ContenedorFotos = document.getElementById('row-photos');
const ContenedorPosts = document.getElementById('row-posts');
const ContenedorUsuarios = document.getElementById('row-user');
const ContenedorAlbums = document.getElementById('row-albums');
const ContenedorComentarios = document.getElementById('row-comments');
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
    ContenedorFotos.innerHTML = ''
    ContenedorUsuarios.inert = ''
    ContenedorPosts.innerHTML = ''
    ContenedorAlbums.innerHTML = ''
    ContenedorComentarios.innerHTML = ''
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

        targetaUser.setAttribute('class', 'col-sm-12 col-md-6 col-lg-4 col-xl-3')

        id.textContent = "Usuario: " + array[i].id
        name.textContent = "Nombre: " + array[i].name
        username.textContent = "Nombre de usuario: "  + array[i].username
        email.textContent = "Correo: " + array[i].email

        targetaUser.appendChild(id)
        targetaUser.appendChild(name)
        targetaUser.appendChild(username)
        targetaUser.appendChild(email)

        ContenedorUsuarios.appendChild(targetaUser)
    }
}
function mostrarFotos(fotos){
    for(let i = 0; i < fotos.length; i++){
        const targetaPhotos = document.createElement('div')
        const id = document.createElement('h5');
        const title = document.createElement('h5');
        const url = document.createElement('img');
        const albumId = document.createElement('h5');
        
        targetaPhotos.setAttribute('class', ' text-center col-sm-12 col-md-6 col-lg-4 col-xl-2')

        id.textContent = 'Foto: ' + array[i].id
        title.textContent = 'Titulo:' + array[i].title
        url.src = array[i].thumbnailUrl
        albumId.textContent = 'Album: ' + array[i].albumId

        targetaPhotos.appendChild( albumId)
        targetaPhotos.appendChild( id)
        targetaPhotos.appendChild(title)
        targetaPhotos.appendChild(url)

        ContenedorFotos.appendChild(targetaPhotos)
    }
}
function mostrarPosts(posts){
    for(let i = 0; i < posts.length; i++){
        const targetaUser = document.createElement('div')
        const id = document.createElement('h5');
        const title = document.createElement('h5');
        const userId = document.createElement('h5');
        const body = document.createElement('h5');

        targetaUser.setAttribute('class', 'card col-sm-12 col-md-6 col-lg-4 col-xl-2')
        if( atributo == 'posts' ) id.textContent = "Post: " + array[i].id
        if( atributo == 'albums') id.textContent = "Album: " + array[i].id
        userId.textContent = "Usuario: " + array[i].userId
        title.textContent = "Titulo: " + array[i].title
        body.textContent =  array[i].body

        targetaUser.appendChild(userId)
        targetaUser.appendChild(id)
        targetaUser.appendChild(title)
        targetaUser.appendChild(body)

        ContenedorPosts.appendChild(targetaUser)
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

        targetaUser.setAttribute('class', 'col-sm-12 col-md-6 col-lg-4 col-xl-3')

        id.textContent =  array[i].id
        postId.textContent = array[i].postId
        name.textContent = array[i].name
        body.textContent = array[i].body
        email.textContent = array[i].email

        targetaUser.appendChild(postId)
        targetaUser.appendChild(id)
        targetaUser.appendChild(name)
        targetaUser.appendChild(email)
        targetaUser.appendChild(body)

        ContenedorComentarios.appendChild(targetaUser)
    }
}