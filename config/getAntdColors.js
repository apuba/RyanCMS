const colorPalette = require('antd-color-palette');
module.exports = {
  getAntdColors(color) {
    let count = 10;
    const colors = [color];
    while (count > 0) {
      colors.push(colorPalette(color, count));
      count -= 1;
    }
    return colors;
  }
}