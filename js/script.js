// Меню бургер

const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const menuLink = document.querySelector('.header__menu-item');

if (iconMenu) {
	
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('burger-active');
		menuBody.classList.toggle('burger-active');
	});
}

// -----------------------------------------------------------------------------
// Табы из этого видео https://www.youtube.com/watch?v=Ta3RGu0bIhY
// -----------------------------------------------------------------------------

let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};


tab();

// -----------------------------------------------------------------------------
// Swiper slider ASIDE
// -----------------------------------------------------------------------------

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
});

// -----------------------------------------------------------------------------
// Swiper slider CENTER
// -----------------------------------------------------------------------------

var splide = new Splide( '.splide', {
    type     : 'loop',
    perPage: 2
  } );
  
  splide.mount();

  var splideSec = new Splide( '.splide-sec', {
    type     : 'loop',
    perPage: 2
  } );
  
  splideSec.mount();

  var splideThird = new Splide( '.splide-third', {
    type     : 'loop',
    perPage: 2
  } );
  
  splideThird.mount();
