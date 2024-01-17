const sharp = require('sharp');

const addText = () => {
    const width = 900;
    const height = 500;
    const text = 'E.T, go home';

    const svgText = `
  <svg width="${width}" height="${height}">
    <style>
      .title { fill: red; font-size: 85px}
    </style>
    <text x="45%" y="40%" text-anchor="middle" class="title">${text}</text>
  </svg>`;

    const svgBuffer = Buffer.from(svgText);

    sharp('./images/sample-1.jpg')
        .composite([{ input: svgBuffer, left: 1150, top: 90 }])
        .toFile(__dirname + '/processed_images/text-sample-1.jpg');

    //sharp does not currently have a method for adding text to an image
    // For our workaround, we use an addText() function with four variables:
    // the desired text area width, the desired text area height,
    // the text string that will be drawn using SVG (in this example, E.T, go home),
    // and a transparent container, svgText, that will hold the text.
    // The SVG element has two child elements: style and text.
    // The style element uses CSS to alter the appearance of the text.
    // The fill and font-size properties modify the color and the size of the text, respectively.
    // The text element has four attributes: horizontal position (x), vertical position (y),
    // alignment (text-anchor), and class.
    // This last attribute, class, specifies how the CSS styles should be applied to the text element.
    // ${text} interpolates the string E.T, go home from the variable text.
    // Next, we use the Buffer.from() function to create a Buffer object
    // from the svgText variable and then store it in the svgBuffer variable.
    // To add the text to the image, we chain the composite() function to the sharp instance
    // and use the svgText variable as the input.
};

addText();
