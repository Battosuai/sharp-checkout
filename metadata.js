const sharp = require('sharp');

const imageMetadata = async () => {
    const metadata = await sharp('./images/sample-1.jpg').metadata();

    console.log(metadata);
};

imageMetadata();
