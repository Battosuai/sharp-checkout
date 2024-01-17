const sharp = require('sharp');

const rotateImage = () => {
    sharp('./images/sample-3.jpg')
        .rotate(250)
        .toFile(__dirname + '/processed_images/sample-3.jpg');
};

rotateImage();
