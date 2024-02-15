document.getElementById('github').addEventListener('click', function() {
    window.open('https://github.com/ryantpham', '_blank');
    });

document.getElementById('linkedin').addEventListener('click', function() {
 window.open('https://www.linkedin.com/in/ryantpham/'
 , '_blank');
    });

document.getElementById('mentor').addEventListener('click', function() {
    window.open('https://www.frontendmentor.io/profile/ryantpham', '_blank');
    });

//Instagram and Twitter button - changes the text when hovered over
document.getElementById('portfolio').addEventListener('mouseenter', function() {
    this.textContent = 'Work in Progress';
});
document.getElementById('portfolio').addEventListener('mouseleave', function() {
    this.textContent = 'Portfolio';
});

document.getElementById('resume').addEventListener('mouseenter', function() {
    this.textContent = 'Work in Progress';
});
document.getElementById('resume').addEventListener('mouseleave', function() {
    this.textContent = 'Resume';
});
