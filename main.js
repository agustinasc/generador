// SIDEBAR

///////////// DECLARACION DE CONST Y LETS /////////

const bigAside = document.getElementById('big-aside');
const firstSection = document.getElementById('first-section');
const navImagen = document.getElementById('nav-imagen');
const navTexto = document.getElementById('nav-texto');
const asideTexto = document.getElementById('aside-texto');
const asideImagen = document.getElementById('aside-imagen');
const asideImagenClose = document.getElementById('aside-imagen-close');
const asideTextoClose = document.getElementById('aside-texto-close');


///////// DECLARACION DE EVENTOS //////////////////

navImagen.addEventListener('click', ()=>{
    bigAside.classList.remove('disapear');
    bigAside.classList.add('appear')
    asideImagen.style.display = 'block';
    asideTexto.style.display ='none';
})
navTexto.addEventListener('click', ()=>{
    bigAside.classList.remove('disapear');
    asideTexto.style.display ='block';
    asideImagen.style.display = 'none'
})

asideImagenClose.addEventListener('click', ()=>{
    asideImagen.style.display = 'none';
    bigAside.classList.add('disapear');
})
asideTextoClose.addEventListener('click', ()=>{
    asideTexto.style.display = 'none'
})
