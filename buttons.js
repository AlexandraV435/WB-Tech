function darkbtn(){
  if (document.querySelector('.hasDark').classList.contains('clicked')) {
    document.querySelector('.main-image').src = 'styles/images/dark.webp';
    document.querySelector('.wrapper_big-lamp').style.display = 'none';
    darkest.classList.add("show")
  } else {
    document.querySelector('.main-image').src = 'styles/images/main_img.webp';
    document.querySelector('.wrapper_big-lamp').style.display = 'block';
  };
}

function lightbtn(){
  document.querySelector('.main-image').src = 'styles/images/main_img.webp';
  document.querySelector('.wrapper_big-lamp').style.display = 'block';

  if (darkest.classList.contains('show')) {
    darkest.classList.remove("show");
  }
}

window.darkbtn = darkbtn;
window.lightbtn = lightbtn;
