const sharp = require('sharp');

const cropImage = () => {
    sharp('./images/sample-2.jpg')
        .extract({ left: 740, width: 500, height: 300, top: 340 })
        .toFile(__dirname + '/processed_images/crop-sample-2.png');
};

cropImage();
