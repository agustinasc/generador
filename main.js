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

let urlImagen = document.getElementById('url-imagen');
let memeImg = document.getElementById('meme-img');

let topText = document.getElementById('top-text');
let topTitle = document.getElementById('top-title');
const topTextCheck = document.getElementById('top-text-check');
const bottomTextCheck = document.getElementById('bottom-text-check');
const bottomText = document.getElementById('bottom-text');
const bottomTitle = document.getElementById('bottom-title')
const textFont = document.getElementById('text-font');
const textFontSize = document.getElementById('text-font-size');
const btnLeft = document.getElementById('btn-left');
const btnCenter = document.getElementById('btn-center');
const btnRight = document.getElementById('btn-right');


const colores = document.getElementById('colores');
const valorTexto = document.getElementById('valor-texto');
const coloresFondo = document.getElementById('background-text');
const valorFondo = document.getElementById('valor-fondo');

const transparente = document.getElementById('transparente');

///////// DECLARACION DE EVENTOS //////////////////
/////////////EVENTOS DEL NAV /////////

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

//////////EVENTOS DE IMAGEN ////////////
urlImagen.addEventListener('change', ()=>{
    let imagen = document.createElement('img');
    memeImg.appendChild(imagen);
    let src = urlImagen.value;
    imagen.setAttribute('src', src);
    imagen.classList.add('meme-img')
    //imagen.setAttribute('width', 400);

})

/////////// EVENTOS DE TEXTO ////////////////

topText.addEventListener('keyup', ()=>{
    let newTopText = topText.value;
    console.log(newTopText);
    topTitle.innerHTML = newTopText;
})

topTextCheck.addEventListener('click', ()=>{
    //console.log(topTextCheck.checked);
    if(topTextCheck.checked == true){
        //console.log('si esta checkeado');
        topTitle.style.display = 'none';
    }else {
        //console.log('no esta chequeado')
        topTitle.style.display = 'flex';
    }
})

bottomText.addEventListener('keyup', ()=>{
    let newBottomText = bottomText.value;
    bottomTitle.innerHTML = newBottomText;
})

bottomTextCheck.addEventListener('click', ()=>{
    if(bottomTextCheck.checked == true){
        bottomTitle.style.display = 'none';
    } else {
        bottomTitle.style.display = 'flex';
    }
})

textFont.addEventListener('change', ()=>{
   topTitle.style.fontFamily = `${textFont.value}`;
   bottomTitle.style.fontFamily = `${textFont.value}`
})

textFontSize.addEventListener('change', ()=>{
    //console.log(textFontSize.value)
    topTitle.style.fontSize = `${textFontSize.value}px`;
    bottomTitle.style.fontSize = `${textFontSize.value}px`;
})

btnLeft.addEventListener('click', (e)=>{
    e.preventDefault();
    //console.log('left')
    topTitle.style.justifyContent = 'left';
    bottomTitle.style.justifyContent = 'left';
})

btnCenter.addEventListener('click', (e)=>{
    e.preventDefault();
    topTitle.style.justifyContent = 'center';
    bottomTitle.style.justifyContent = 'center';
})

btnRight.addEventListener('click', (e)=>{
    e.preventDefault();
    topTitle.style.justifyContent = 'flex-end'
    bottomTitle.style.justifyContent = 'flex-end'
})

//Eventos de colores//

colores.addEventListener('input', (e)=> {
    console.log(e.target.value);
    topTitle.style.color = e.target.value;
    bottomTitle.style.color = e.target.value;
    let textColor = e.target.value;
    valorTexto.innerHTML = textColor.toUpperCase();
    //console.log(valorColores.value)
})

//Evento de fondos //
coloresFondo.addEventListener('input', (e)=>{
    console.log(e.target.value);
    topTitle.style.backgroundColor = e.target.value;
    bottomTitle.style.backgroundColor = e.target.value;
    valorFondo.innerHTML = e.target.value.toUpperCase();
})

transparente.addEventListener('click', (e)=>{
    //console.log(e.target.checked)
    if (e.target.checked == true){
        //HAY QUE AGRANDAR LA FOTO
    }else if (e.target.checked == false) {
        //HAY QUE ACHICAR LA FOTO
    }
})