function nohov() {
  document.querySelector('.main-image').border = '0px';
  document.querySelector('.main-image').style.boxShadow = ''

}

function hov(img, id) {
  if (document.getElementById(id).classList.contains("clicked")) {
    document.querySelector('.main-image').border = '1px';
    document.querySelector('.main-image').style.borderBottom = '0px';
    document.querySelector('.main-image').style.boxShadow = '0px 5px 5px -5px rgba(34, 60, 80, 0.6)'
  } else {
    document.querySelector('.main-image').style.boxShadow = '';
  }
}

window.nohov = nohov;
window.hov = hov;
