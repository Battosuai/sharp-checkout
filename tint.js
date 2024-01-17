const sharp = require('sharp');

const tintImage = () => {
    sharp('./images/sample-2.jpg')
        .tint({ r: 255, g: 0, b: 0 })
        .toFile(__dirname + '/processed_images/sample-2.jpg');
};

tintImage();
