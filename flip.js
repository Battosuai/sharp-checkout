const sharp = require('sharp');
const flipImage = async () => {
    await sharp('./images/sample-4.jpg')
        .flip()
        .toFile(__dirname + '/processed_images/flip-sample-4.jpg');
};
flipImage();
