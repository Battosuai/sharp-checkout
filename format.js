const sharp = require('sharp');

const formatImage = () => {
    sharp('./images/sample-1.jpg')
        .toFormat('png', { palette: true })
        .toFile(__dirname + '/processed_images/sample-1.png');

    // Each formatImage() accepts a separate object with various properties.
    // The palette property, for example, is only valid on PNG images.
    // Only JPEG pictures can use the mozjpeg property, and only WebP images can use the lossless property.
};

formatImage();
