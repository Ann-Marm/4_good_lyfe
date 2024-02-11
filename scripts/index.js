
/* полный слайдер - работает с ошибкой */
/*import Swiper from '../lib/swiper-bundle.min.js';*/

/* модульный слайдер с компа не работает */
/*import Swiper from '../lib/swiper-bundle.min.mjs'; */

/* модульный слайдер - работает только с его сайта */
/* import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'; */

/* на сайте подключения Свайпера раньше была другая ссылка для браузера,
хз почему сейчас не рабочая, может починят
скачала файл из старого проекта - работает */
import Swiper from '../lib/swiper-bundle.esm.browser.min.js';

/* проверка, что Swiper работает */

new Swiper('.hero__block', {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
/*
        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
*/
        1440: {
            slidesPerView: 1,
            spaceBetween: 5,
        },

    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
        prevEl: '.hero__arrow_prev',
        nextEl: '.hero__arrow_next'
    },
  /*  speed: 5000,
    autoplay: {
      delay: 3000,
    },*/
    
   
  
    preventClicks: true,
    a11y: false,
});


/* menu mobile */
/*
$('.header__navigation-burger').click(function() {
    $('.header__navigation').slideToggle();
   $(".header").toggleClass('header_margin');
});
*/

let navDesktop = document.querySelector('.nav-desktop');


let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if ( width < 1025 ) {
	navDesktop.classList.remove('nav-desktop');
}


let toolbar = document.querySelector('.toolbar');
let header = document.querySelector('.header');

toolbar.onclick = function(event) {
  let target = event.target.closest('.btn-header-window');

 // if (target.tagName != 'A') return;
  // added
  document.querySelectorAll('.modal-window').forEach( modal => {
  	modal.id !== target.dataset.target && modal.classList.remove('modal-window--active');
    
  })
  // -----
  let modalActive = document.querySelector('#' + target.dataset.target);
  modalActive.classList.toggle('modal-window--active');
//  header.classList.toggle('header--fixed');
};


/* sliding */
import SwiperSliding from '../lib/swiper-bundle.esm.browser.min.js';


new SwiperSliding('.sliding__block', {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
/*
        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
*/
        1440: {
            slidesPerView: 1,
            spaceBetween: 5,
        },

    },
    pagination: {
      el: '.swiper-pagination-sliding',
    },
    navigation: {
        prevEl: '.sliding__arrow_prev',
        nextEl: '.sliding__arrow_next'
    },
  /*  speed: 5000,
    autoplay: {
      delay: 3000,
    },*/
    
   
  
    preventClicks: true,
    a11y: false,
});



/* reviews */
/*
import SwiperReviews from '../lib/swiper-bundle.esm.browser.min.js';


new SwiperReviews('.reviews__block', {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },

    },
    pagination: {
      el: '.swiper-pagination-reviews',
    },

    
    preventClicks: true,
    a11y: false,
});

*/


/* reviews */
/*
let reviewsBlock = document.querySelector('.reviews__block');
let reviewsList = document.querySelector('.reviews__list');
let review = document.querySelector('.review');
let swiperPaginationReviews = document.querySelector('.swiper-pagination-reviews');

import SwiperReviews from '../lib/swiper-bundle.esm.browser.min.js';

let init = false;
let swiper_2;
function swiperCard() {
  if (window.innerWidth <= 320) {

     

    if (!init) {
      init = true; 

      reviewsBlock.classList.add('swiper');
      reviewsList.classList.add('swiper-wrapper');
      review.classList.add('swiper-slide');
      swiperPaginationReviews.classList.add('swiper-pagination-reviews-mob');

      swiper_2 = new SwiperReviews('.reviews__block', {

     slidesPerView: "auto",

        
        slidesPerView: 1.2,
        spaceBetween: 18,
        loop: true,

        pagination: {
          el: ".swiper-pagination-reviews-mob",
        },

        preventClicks: true,
        a11y: false,
      });
    }
  } else if (init) {
    swiper_2.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);
*/


/* destroy swiper*/
let reviewsBlock = document.querySelector('.reviews__block');
let reviewsList = document.querySelector('.reviews__list');
let review = document.querySelector('.review');
let swiperPaginationReviews = document.querySelector('.swiper-pagination-reviews');

let widthForSwiper = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if ( widthForSwiper > 320 ) {
  reviewsBlock.classList.remove('swiper');
  reviewsList.classList.remove('swiper-wrapper');
  review.classList.remove('swiper-slide');
  swiperPaginationReviews.classList.add('swiper-pagination-reviews-desktop');
}




/*rew-2*/
import SwiperReviews from '../lib/swiper-bundle.esm.browser.min.js';



new SwiperReviews('.reviews__block', {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
   /* centeredSlides: true,*/
    breakpoints: {

        320: {
            slidesPerView: 1.2,
            spaceBetween: 18,
        },
/*
        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
*/
/*
        1440: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
*/
    },
    pagination: {
      el: '.swiper-pagination-reviews',
    },
    /*
    navigation: {
        prevEl: '.hero__arrow_prev',
        nextEl: '.hero__arrow_next'
    },
    */
  /*  speed: 5000,
    autoplay: {
      delay: 3000,
    },*/
    

    preventClicks: true,
    a11y: false,
});






/* LOGIN FORM */
//this function to applay your animate style

let width_1 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function animate_Me(target, moveMe){
  $(target).focus(function(){
    
    if ( width_1 < 321 ) {
      $(moveMe).animate({"marginLeft":"220px"});
    }
    else {

    $(moveMe).animate({"marginLeft":"256px"});
  }
  });
  $(target).focusout(function(){
    $(moveMe).animate({"marginLeft":"34px"});
  });
}


animate_Me("input[type='text']", ".fa-user");
animate_Me("input[placeholder='Your Last Name']", ".fa-user-plus");
animate_Me("input[type='email']", ".fa-envelope");
animate_Me("input[type='password']", ".fa-lock");
animate_Me("input[placeholder='Confirm Password']", ".fa-refresh");
/*
let width_1 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if ( width_1 < 321 ) {
	function animate_Me_1(target, moveMe){
    $(target).focus(function(){
      $(moveMe).animate({"marginLeft":"200px"});
    });
    $(target).focusout(function(){
      $(moveMe).animate({"marginLeft":"34px"});
    });
  }
}
*/



/*
function animate_Me(target, moveMe){
  $(target).focus(function(){
    $(moveMe).animate({"marginLeft":"256px"});
  });
  $(target).focusout(function(){
    $(moveMe).animate({"marginLeft":"34px"});
  });
}

animate_Me("input[type='text']", ".fa-user");
animate_Me("input[placeholder='Your Last Name']", ".fa-user-plus");
animate_Me("input[type='email']", ".fa-envelope");
animate_Me("input[type='password']", ".fa-lock");
animate_Me("input[placeholder='Confirm Password']", ".fa-refresh");
*/


