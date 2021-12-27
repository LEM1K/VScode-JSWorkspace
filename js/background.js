window.onload = function() {
    onloadImage();
}

const images = ["1.jpg","2.jpg", "3.jpg", "4.jpg", "5.jpg","6.jpg", "7.jpg", "8.jpg"];

const imglen = images.length;
const chosenImage = images[Math.floor(Math.random() * imglen)];


function onloadImage() {
    document.body.style.backgroundImage = 'url(' + `img/${chosenImage}` + ')';
}

