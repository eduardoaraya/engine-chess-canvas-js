import Canvas from './Canvas.js';

export default class Board extends Canvas {

    colors = ['#ceb8aa', '#6e4f3b'];

    constructor(element, dimensions) {
        super(element,dimensions);
        this.render()
    }

    render() {
        for ( let pixel of this.model.grid ){
            let colortarget;
            if(pixel.row%2 == 0){
                colortarget = ( pixel.column%2 == 0) ? this.colors[1] : this.colors[0]
            }else{
                colortarget = ( pixel.column%2 == 0) ? this.colors[0] : this.colors[1]
            }
            this.context.fillStyle = colortarget;
            this.context.fillRect(pixel.x, pixel.y, pixel.size, pixel.size);
        }
    }
}