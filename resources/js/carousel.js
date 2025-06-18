import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay:{
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

