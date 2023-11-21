import Swiper from 'swiper/bundle';

const swiper = new Swiper(".swiper1", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-nexts',
        prevEl: '.swiper-button-prevs',
    },
});

export default Swiper