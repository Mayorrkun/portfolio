
window.addEventListener('scroll', function(){
    const navBar = document.querySelector('.navBar');
    navBar.classList.toggle('scrolled', window.scrollY > 0);
})

document.addEventListener('DOMContentLoaded', function(){
    const path = window.location.pathname;

    function setActive(pathMatch,elementId){
        const element = document.getElementById(elementId);

        if(!element){
            return;
        }
        if( pathMatch === '/' && path === '/' ){
            element.classList.add('active-a');
        }
        else if( pathMatch !== '/' && path.startsWith(pathMatch)){
           element.classList.add('active-a');
        }
        else{
            element.classList.remove('active-a');
        }
    }

    setActive('/', 'home');
    setActive('/about', 'about');
})
