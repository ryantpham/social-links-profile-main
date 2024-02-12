document.getElementById('github').addEventListener('click', function() {
    window.open('https://github.com/ryantpham', '_blank');
    });

document.getElementById('linkedin').addEventListener('click', function() {
 window.open('https://www.linkedin.com/in/ryantpham?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
 , '_blank');
    });

document.getElementById('mentor').addEventListener('click', function() {
    window.open('https://www.frontendmentor.io/profile/ryantpham', '_blank');
    });

//Instagram and Twitter button - changes the text when hovered over
document.getElementById('instagramButton').addEventListener('mouseenter', function() {
    this.textContent = 'Demo Only';
});
document.getElementById('instagramButton').addEventListener('mouseleave', function() {
    this.textContent = 'Instagram';
});

document.getElementById('twitterButton').addEventListener('mouseenter', function() {
    this.textContent = 'Demo Only';
});
document.getElementById('twitterButton').addEventListener('mouseleave', function() {
    this.textContent = 'Twitter';
});