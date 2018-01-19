export const hidePopup = () => {
  document.getElementById('popup').classList.add('d-none')
  document.getElementById('p-card').classList.add('d-none')
  document.querySelector('.searchbar').style.zIndex = 10;
  if ( window.innerWidth < 768 ) {
    document.querySelector('.header .title').classList.remove('d-none')
  }
  if (window.innerWidth >= 990) {
    document.querySelector('.searchbar input').classList.remove('focus')
  }
}
