let nav = document.querySelector('nav'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 47) { // Just an example
        nav.style.backgroundColor = 'transparent'; // or default color
    } else {
        nav.style.backgroundColor = 'rgba(194, 139, 180, .95)';
        
    }
});
