const sharp = require('sharp');

const compositeImage = () => {
    sharp('./images/sample-3.jpg')
        .composite([{ input: './images/sample-4.jpg', left: 900, top: 750 }])
        .toFile(__dirname + '/processed_images/composite-sample-3-4.jpg');

    // Image to composite must have same dimensions or smaller
};

compositeImage();
