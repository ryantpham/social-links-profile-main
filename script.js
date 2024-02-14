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
<<<<<<< HEAD
document.getElementById('portfolio').addEventListener('mouseleave', function() {
    this.textContent = 'Portfolio';
=======
document.getElementById('instagramButton').addEventListener('mouseleave', function() {
    this.textContent = 'Resume';
>>>>>>> 61e721ff176f6d9b9d227908124177bb1406f3fc
});

document.getElementById('resume').addEventListener('mouseenter', function() {
    this.textContent = 'Work in Progress';
});
<<<<<<< HEAD
document.getElementById('resume').addEventListener('mouseleave', function() {
    this.textContent = 'Resume';
});
=======
document.getElementById('twitterButton').addEventListener('mouseleave', function() {
    this.textContent = 'Portfolio';
});
>>>>>>> 61e721ff176f6d9b9d227908124177bb1406f3fc
