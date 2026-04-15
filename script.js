// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#000';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});

// Simple alert for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert('This feature is coming soon!');
    });
});