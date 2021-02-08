// SIDEBAR

///////////// DECLARACION DE VARIABLES /////////

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
const mainMeme = document.getElementById('main-meme');

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
const btnNinguno = document.getElementById('btn-ninguno');
const btnClaro = document.getElementById('btn-claro');
const btnOscuro = document.getElementById('btn-oscuro');

const colores = document.getElementById('colores');
const valorTexto = document.getElementById('valor-texto');
const coloresFondo = document.getElementById('background-text');
const valorFondo = document.getElementById('valor-fondo');
const colorBackg = document.getElementById('color-background');
let textoBackg = document.getElementById('background-texto');

const transparente = document.getElementById('transparente');

const spaceText = document.getElementById('space-text');
const interlineText = document.getElementById('interline-text');

const fondoSelect = document.getElementById('fondo-select');

const filterBri = document.getElementById('filter-brightness');
const filterOpa = document.getElementById('filter-opacity');
const filterCon = document.getElementById('filter-contrast');
const filterBlu = document.getElementById('filter-blur');
const filterGra = document.getElementById('filter-grayscale');
const filterSep = document.getElementById('filter-sepia');
const filterHue = document.getElementById('filter-hue');
const filterSat = document.getElementById('filter-saturation');
const filterNeg = document.getElementById('filter-invert');

const btnImagenReset = document.getElementById('btn-imagen-reset')
const btnDownload = document.getElementById('btn-download');

/////////  EVENTOS ///////////////

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


//////////EVENTOS DE SIDEBAR - IMAGEN ////////////


urlImagen.addEventListener('change', (e)=>{
    let src = urlImagen.value;
    console.log(src)
    memeImg.style.backgroundImage = `url('${src}')`;
    memeImg.style.backgroundPosition = 'center';
    memeImg.style.backgroundRepeat = 'no-repeat';
    //memeImg.style.backgroundSize = 'contain';
})
colorBackg.addEventListener('input', (e)=>{
    memeImg.style.backgroundColor =  e.target.value;
    textoBackg.innerHTML =  e.target.value.toUpperCase();
})

fondoSelect.addEventListener('change', ()=>{
    if (fondoSelect.value == 'aclarar'){
        memeImg.classList.add('aclarar')
    } else if (fondoSelect.value == 'oscurecer'){
        memeImg.classList.add('oscurecer')
    } else if (fondoSelect.value == 'diferencia'){
        memeImg.classList.add('diferencia')
    } else if (fondoSelect.value == 'luminosidad'){
        memeImg.classList.add('luminosidad')
    } else if (fondoSelect.value =='multiplicar'){
        memeImg.classList.add('multiplicar')
    }
});

// /////////FILTROS ///////
const filtrosImagen = () =>{
    memeImg.style.filter = `brightness(${filterBri.value}) opacity(${filterOpa.value}) contrast(${filterCon.value}%) blur(${filterBlu.value}px) grayscale(${filterGra.value}%) sepia(${filterSep.value}%) hue-rotate(${filterHue.value}deg) saturate(${filterSat.value}%) invert(${filterNeg.value})`;
};

filterBri.addEventListener('change', filtrosImagen);
filterOpa.addEventListener('change', filtrosImagen);
filterCon.addEventListener('change', filtrosImagen);
filterBlu.addEventListener('change', filtrosImagen);
filterGra.addEventListener('change', filtrosImagen);
filterSep.addEventListener('change', filtrosImagen);
filterHue.addEventListener('change', filtrosImagen);
filterSat.addEventListener('change', filtrosImagen);
filterNeg.addEventListener('change', filtrosImagen);

btnImagenReset.addEventListener('click', (e)=>{
    e.preventDefault();
    filterBri.value = '1';
    filterOpa.value= '1';
    filterCon.value= '100';
    filterBlu.value= '0';
    filterGra.value = '0';
    filterSep.value = '0';
    filterHue.value= '0';
    filterSat.value = '100';
    filterNeg.value = '0';
    filtrosImagen();
});


// filterBri.addEventListener('change', (e)=>{
//    let valueFilter = e.target.value;
//     memeImg.style.filter = `brightness(${valueFilter})`;
// })
// filterOpa.addEventListener('change', (e)=>{
//    let valueFilter = e.target.value;
//     memeImg.style.filter = `opacity(${valueFilter})`;
// })
// filterCon.addEventListener('change', (e)=>{
//     let valueFilter = e.target.value;
//     memeImg.style.filter = `contrast(${valueFilter}%)`;
// })
// filterBlu.addEventListener('change', (e)=>{
//    let valueFilter = (e.target.value);
//     memeImg.style.filter = `blur(${valueFilter}px)`;
// })
// filterGra.addEventListener('change', (e)=>{
//    let valueFilter = e.target.value;
//     memeImg.style.filter = `grayscale(${valueFilter}%)`;
// })
// filterSep.addEventListener('change', (e)=>{
//    let valueFilter = e.target.value;
//     memeImg.style.filter = `sepia(${valueFilter}%)`;
// })
// filterHue.addEventListener('change', (e)=>{
//     let valueFilter = e.target.value;
//     memeImg.style.filter = `hue-rotate(${valueFilter}deg)`;
// })
// filterSat.addEventListener('change', (e)=>{
//     let valueFilter = e.target.value;
//     memeImg.style.filter = `saturate(${valueFilter}%)`;
// })
// filterNeg.addEventListener('change', (e)=>{
//     let valueFilter = e.target.value;
//     memeImg.style.filter = `invert(${valueFilter})`;
// })

// //////////BOTON DE REINICIO ////////

// btnImagenReset.addEventListener('click', (e)=>{
//     e.preventDefault();
//     filterBri.value = "1";
//     memeImg.style.filter = `brightness(1)`;
//     filterOpa.value = "1";
//     memeImg.style.filter = `opacity(1)`;
//     filterCon.value = "100";
//     memeImg.style.filter = `contrast(100)`;
//     filterBlu.value = "0";
//     memeImg.style.filter = `blur(0)`;
//     filterGra.value = "0";
//     memeImg.style.filter = `grayscale(0)`;
//     filterSep.value = "0";
//     memeImg.style.filter = `sepia(0)`;
//     filterHue.value = "0";
//     memeImg.style.filter = `hue-rotate(0)`;
//     filterSat.value = "100";
//     memeImg.style.filter = `saturate(100%)`
//     filterNeg.value = "0";
//     memeImg.style.filter = `invert(0)`;
// })



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
   bottomTitle.style.fontFamily = `${textFont.value}`;
})

textFontSize.addEventListener('change', ()=>{
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

//////COLORES///////

colores.addEventListener('input', (e)=> {
    console.log(e.target.value);
    topTitle.style.color = e.target.value;
    bottomTitle.style.color = e.target.value;
    let textColor = e.target.value;
    valorTexto.innerHTML = textColor.toUpperCase();
    //console.log(valorColores.value)
})

///////////FONDO///////////

coloresFondo.addEventListener('input', (e)=>{
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

//////////BOTONES DE CONTORNO ///////

btnNinguno.addEventListener('click', (e)=>{
    e.preventDefault();
    topTitle.style.textShadow = 'none';
    bottomTitle.style.textShadow = 'none';
})
btnClaro.addEventListener('click', (e)=>{
    e.preventDefault();
    topTitle.style.textShadow = 'rgb(255 255 255) 2px 2px, rgb(255 255 255) -2px 2px, rgb(255 255 255) 2px -2px, rgb(255 255 255) -2px -2px';
    bottomTitle.style.textShadow = 'rgb(255 255 255) 2px 2px, rgb(255 255 255) -2px 2px, rgb(255 255 255) 2px -2px, rgb(255 255 255) -2px -2px';
})
btnOscuro.addEventListener('click', (e)=>{
    e.preventDefault();
    topTitle.style.textShadow = 'rgb(0 0 0) 2px 2px, rgb(0 0 0) -2px 2px, rgb(0 0 0) 2px -2px, rgb(0 0 0) -2px -2px';
    bottomTitle.style.textShadow = 'rgb(0 0 0) 2px 2px, rgb(0 0 0) -2px 2px, rgb(0 0 0) 2px -2px, rgb(0 0 0) -2px -2px';
})

///// ESPACIADO /////

spaceText.addEventListener('change', (e)=>{
    let spaceValue = e.target.value;
    topTitle.style.padding = `${spaceValue}px`;
    bottomTitle.style.padding = `${spaceValue}px`;
})

///// INTERLINEADO /////

interlineText.addEventListener('change', (e)=>{
    let interlineValue = e.target.value;
    topTitle.style.lineHeight = `${interlineValue}`;
    bottomTitle.style.lineHeight = `${interlineValue}`;
})

////////////BOTON DE DESCARGA ///////////

btnDownload.addEventListener('click', ()=>{
    domtoimage.toBlob(mainMeme)
        .then(function (blob) {
            window.saveAs(blob, 'my-node.png');
        });

})