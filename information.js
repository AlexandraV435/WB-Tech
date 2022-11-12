let materiall = document.querySelector('.material');
let dimensions = document.querySelector('.dim');
let wei = document.querySelector('.weight');
let electr = document.querySelector('.electr');
let mainImg = document.querySelector('.wrapper_big-lamp');
let bigLamp = document.querySelector('.show-lamp-main-image');
let lampDiv = document.querySelector('.LampList');
let darkest = document.querySelector('.dark-button');
let light = document.querySelector('.light-button');

function inf(height, width, weight, material, electrification, img, id, i) {
  materiall.innerHTML = `<div class='div-inf'><p class='p-inf'> Material: </p><p > ${material[0].toUpperCase() + material.slice(1)}</p></div>`;
  dimensions.innerHTML = `<div class='div-inf'><p class='p-inf'>Dimensions(cm): </p><p> H ${height} x W ${width} x D ${width}</p></div>`;
  wei.innerHTML = `<div class='div-inf'><p class='p-inf'>Net Weight: </p><p>${weight} kg</p></div>`;
  electr.innerHTML = `<div class='div-inf no-flex x'><p class='p-inf no-flex-p'>Electrification:</p><p>${electrification}</p></div>`;
  mainImg.innerHTML = `<img class='show-img ${material}-${i}' src=${img}>`;
  bigLamp.innerHTML = `<img class='show-lamp-main-image lamp-${material}-${i}' src=${img}>`;
  let elem = document.getElementsByClassName('big-lamp');
  for (let i = 0; i < elem.length; i++) {
     elem[i].style.background = '';
     elem[i].classList.remove("clicked");
   }
   if (document.querySelector('.show-img').classList.contains('metal-2')) {
     document.querySelector('.metal-2').style.width = '12vh';
     document.querySelector('.metal-2').style.height = '20vh';
     document.querySelector('.lamp-metal-2').style.width = '160px';
   } else if (document.querySelector('.show-img').classList.contains('plastic-4')) {
     document.querySelector('.lamp-plastic-4').style.width = '270px';
     document.querySelector('.plastic-4').style.width = '170px';
   }

  document.getElementById(id).classList.add("clicked")
  document.getElementById(id).style.background = '#e1edee';
  document.querySelector('.main-image').border = '1px';
  document.querySelector('.main-image').style.borderBottom = '0px';
  document.querySelector('.main-image').style.boxShadow = '';
  document.querySelector('.main-image').style.boxShadow = '0px 5px 5px -5px rgba(34, 60, 80, 0.6)';

  let d = document.getElementsByClassName('hasntDark');
  for (let i = 0; i < d.length; i++) {
    if (d[i].classList.contains('clicked')) {
      document.querySelector('.main-image').src = 'styles/images/main_img.webp';
      document.querySelector('.wrapper_big-lamp').style.display = 'block';
    };
  }
  if (document.querySelector('.hasDark').classList.contains('clicked')) {
    darkest.style.background = '#4d5454'
  } else {
    darkest.style.background = '#94A6A6'
  }
}

window.inf = inf;
