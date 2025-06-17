window.addEventListener('scroll', function(){
    const navBar = document.querySelector('.navBar');
    navBar.classList.toggle('scrolled', window.scrollY > 0);
})
