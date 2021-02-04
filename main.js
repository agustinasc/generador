// SIDEBAR

///////////// DECLARACION DE CONST Y LETS /////////
const bigAside = document.getElementById('big-aside');
const navImagen = document.getElementById('nav-imagen');
const navTexto = document.getElementById('nav-texto');
const asideTexto = document.getElementById('aside-texto');
const asideImagen = document.getElementById('aside-imagen');
const asideImagenClose = document.getElementById('aside-imagen-close');
const asideTextoClose = document.getElementById('aside-texto-close');


///////// DECLARACION DE EVENTOS //////////////////

navImagen.addEventListener('click', ()=>{
    //bigAside.style
    asideImagen.style.display = 'block';
    asideTexto.style.display ='none';
})
navTexto.addEventListener('click', ()=>{
    asideTexto.style.display ='block';
    asideImagen.style.display = 'none'
})

asideImagenClose.addEventListener('click', ()=>{
    asideImagen.style.display = 'none'
    //alert('funciona')
})
asideTextoClose.addEventListener('click', ()=>{
    asideTexto.style.display = 'none'
})
// .big-aside{
//     display: none;
// }
// .first-section{
//     width: 100%;
// }