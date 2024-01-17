const sharp = require('sharp');

const sharpenImage = () => {
    sharp('./images/sample-3.jpg')
        .sharpen(13)
        .toFile(__dirname + '/processed_images/sharpen-sample-3.jpg');

    //deprecated
};

sharpenImage();
