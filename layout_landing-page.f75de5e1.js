'use strict';
window.addEventListener('scroll', ()=>{
    const header = document.querySelector('.header');
    if (window.scrollY > 0) header.classList.add('header--scrolled');
    else header.classList.remove('header--scrolled');
});

//# sourceMappingURL=layout_landing-page.f75de5e1.js.map
