const sharp = require('sharp');

const resizeImage = () => {
    const resize = sharp('./images/sample-4.jpg')
        .resize(350, 260)
        .toFile(__dirname + '/processed_images/sample-4.jpg');

    console.log(resize);
};

resizeImage();
