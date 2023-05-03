function BotonSeguirApretado() {
  const boton = document.getElementById('boton-seguir');
  let colorActual = boton.style.backgroundColor;

  if (colorActual === '') {
    boton.style.backgroundColor = '#f05a5a';
    boton.innerText = 'Dejar de seguir';
  } else {
    boton.style.backgroundColor = '#3b82f6';
    boton.innerText = 'Seguir';
  }
}

const BotonLike = document.getElementById('boton-megusta');
const ContadorLike = document.getElementById('contador-likes');
let Likeado = false;

BotonLike.addEventListener('click', function () {
  if (Likeado) {
    let count = parseInt(ContadorLike.innerText);
    ContadorLike.innerText = count - 1 + " Likes";
    BotonLike.style.backgroundColor = '';
    BotonLike.style.color = '';
    Likeado = false;
  } else {
    let count = parseInt(ContadorLike.innerText);
    ContadorLike.innerText = count + 1 + " Likes";
    BotonLike.style.backgroundColor = '#3b82f6';
    BotonLike.style.color = '#fff';
    Likeado = true;
  }
});


const botonEliminar = document.getElementById('boton-eliminar');

botonEliminar.addEventListener('click', function () {
  const nombreAzul = document.querySelector('.nombre-azul');
  const textoComentario = document.querySelector('.texto-comentario2');

  nombreAzul.remove();
  textoComentario.remove();
  botonEliminar.remove();
});


const botonComentar = document.getElementById('boton-comentar');
const comentarios = document.getElementById('comentarios');
const usuario = document.getElementById('usuario');
const usuarioError = document.getElementById('usuario-error');
const comentarioError = document.getElementById('comentario-error');

botonComentar.addEventListener('click', function (event) {
  event.preventDefault();
  const comentario = document.getElementById('comentar').value;

  if (usuario.value === '') {
    usuarioError.style.display = 'block';
    return;
  } else {
    usuarioError.style.display = 'none';
  }

  if (comentario.length === 0) {
    comentarioError.style.display = 'block';
    return;
  } else {
    comentarioError.style.display = 'none';
  }

  const nuevoComentario = document.createElement('p');
  nuevoComentario.innerHTML = '<b>' + usuario.value + '</b> ' + comentario;
  comentarios.appendChild(nuevoComentario);
});