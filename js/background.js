const images = ["0.jpg", "1.jpg","2.jpg"];

const imglen = images.length;
const chosenImage = images[Math.floor(Math.random() * imglen)];
const backimage = document.createElement("img");

backimage.src = `img/${chosenImage}`;
document.body.appendChild(backimage);