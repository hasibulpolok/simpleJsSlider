const images = [
    'img/pic-1.jpg',
    'img/pic-2.jpg',
    'img/pic-3.jpg',
    'img/pic-4.jpg',
    'img/pic-5.jpg',
];

const displayImage = document.getElementById('slider-img');

let imgIndex = 0;

setInterval(() => {

    if (imgIndex >= images.length) {
        imgIndex = 0;
    };
    const imgUrl = images[imgIndex];
    imgIndex++;
    displayImage.setAttribute('src', imgUrl);

}, 2000);