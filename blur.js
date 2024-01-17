const sharp = require('sharp');

const blurImage = () => {
    sharp('./images/sample-1.jpg')
        .blur(9)
        .toFile(__dirname + '/processed_images/blur-sample-1.jpg');

    // blur() method of the sharp module to apply a Gaussian blur to the image.
    // This technique uses the Gaussian function to give the pixels at the edge of the image less weight,
    // resulting in reduced image detail and image noise.
    // For this example, the Gaussian .blur() sigma is 9.
};

blurImage();
