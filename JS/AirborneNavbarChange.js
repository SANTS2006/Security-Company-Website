window.addEventListener('scroll', ()=> {
    const navBar = document.getElementById('navBar');

    if(window.scrollY >= 50){
        navBar.classList.add('scrolled');
    }
    else{
        navBar.classList.remove('scrolled');
    }
})