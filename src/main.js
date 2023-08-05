'use strict';

// header에 페이지 아래로 스크롤 시 다크 스타일링 적용

const header = document.querySelector('header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});

// Home section을 스크롤 시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow up 버튼을 아래로 스크롤 시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
});

// Navbar 토글 버튼 클릭 처리

const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
    // class가 있으면 켜지고 없으면 꺼지는 기능, toggle
    navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭 시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});
