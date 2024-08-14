console.log("Your index.js file is loading correctly!");

window.addEventListener('load', function() {
    var loadingOverlay = document.querySelector('.loading-overlay');
    var content = document.getElementById('content');
    
    loadingOverlay.style.transition = 'opacity 0.5s ease';
    loadingOverlay.style.opacity = '0';
    
    setTimeout(function() {
        loadingOverlay.style.display = 'none';
        content.style.display = 'block';
    }, 500); 

});

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        button.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = 'none';
    });
});





