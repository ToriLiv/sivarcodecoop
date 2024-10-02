//----------------------------------------------------------------------------------->preloader
window.addEventListener('load', function() {
    const preloaderContainer = document.querySelector('.preloader-container');
    
    //Oculta 
    setTimeout(function() {
        preloaderContainer.style.opacity = '0';
        preloaderContainer.style.transition = 'opacity 0.5s ease';
        
        //Elimina el preloader 
        setTimeout(function() {
            preloaderContainer.style.display = 'none';
        }, 500);
    }, 800);  //tiempo
});


//------------------------------------------TYPE WRITER-----------------------------------------------
 const text = "<DESARROLLANDO EL MUNDO A TU LADO/>";
        const typewriter = document.getElementById('typewriter');
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                typewriter.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100); 
            } else {
                typewriter.classList.add('cursor');
            }
        }

        window.onload = typeWriter;