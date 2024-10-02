//----------------------------------------------------------------------------------------------------MANEJO DE GLITCH------------------------------------------------------------------------->

document.addEventListener('DOMContentLoaded', (event) => {
    document.body.classList.add('fade-in');

    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
        
            if (href.startsWith('/') || href.startsWith(window.location.origin)) {
                e.preventDefault();
                document.body.classList.remove('fade-in');
                document.body.classList.add('fade-out');

                setTimeout(() => {
                    window.location = href;
                }, 500); 
            }
        });
    });
});