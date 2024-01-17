const sharp = require('sharp');

const convertTograyscale = () => {
    sharp('./images/sample-1.jpg')
        .grayscale() // or .greyscale()
        .toFile(__dirname + '/processed_images/sample-1.jpg');
};

convertTograyscale();
