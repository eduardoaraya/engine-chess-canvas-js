import Canvas from './Canvas.js';

export default class Board extends Canvas {

    colors = ['#ceb8aa', '#6e4f3b'];

    constructor(element, dimensions) {
        super(element,dimensions);
    }

    printBoard(item, column) {
        let color = (column % 2 == 0) ? this.colors[0] : this.colors[1];
        let lastcolor = '';
        item.forEach(pixel => {
            if (lastcolor)
                color = lastcolor == this.colors[1] ? this.colors[0] : this.colors[1]
            this.context.fillStyle = color;
            lastcolor = color;
            this.context.fillRect(pixel.x, pixel.y, pixel.size, pixel.size);
        })
    }
}