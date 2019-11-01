import Model from './Model.js';
import GAME , { config } from './game.js';

export default class Board{

    colors = ['#ceb8aa','#6e4f3b'];

    constructor(element,dimensions){
        this.canvas = document.getElementById(element);
        this.context = this.canvas.getContext('2d');
        this.addEventBoard();
        this.model = new Model(dimensions)
    }

    render(callback){
        this.model.grid.forEach((item,number) => {
            callback(item,number)          
        });
    }

    printBoard(item,column){
        let color = (column % 2 == 0) ? this.colors[0] : this.colors[1];
        let lastcolor = '';
        item.forEach( pixel => {
            if(lastcolor)
                color = lastcolor == this.colors[1] ? this.colors[0] : this.colors[1]
            this.context.fillStyle = color;
            lastcolor = color;
            this.context.fillRect( pixel.x, pixel.y, pixel.size, pixel.size);
        })
    }

    printPieces(item,column){
        const pieces = this.initialPositionPieces(item,column);
        pieces.forEach( piece => {

            const base_image = new Image();
            base_image.src = piece.img;
            base_image.onload = () => this.context.drawImage(base_image, piece.x, piece.y , piece.size , piece.size );

            if( [piece.name + '_A'] in GAME )
                GAME[piece.name + '_B'] = piece;
            else
                GAME[piece.name + '_A'] = piece;
        })
    }

    initialPositionPieces(item,column){
        let pieces = [];
        item.forEach( (pixel, row) => {
            Object.values(config.pieces).forEach(item => {
                if( item.cordinates.a.x.includes(column) && item.cordinates.a.y.includes(row) ){
                    pieces.push({
                        id:column + row,
                        color:'white',
                        name:(item.name == 'peao') ? `P${column}` : item.name,
                        ...pixel,
                        img:item.images.a
                    });
                }
                if( item.cordinates.b.x.includes(column) && item.cordinates.b.y.includes(row) ){
                    pieces.push({
                        id:column + row,
                        color:'black',
                        name:(item.name == 'peao') ? `P${column}` : item.name,
                        ...pixel,
                        img:item.images.b
                    });
                }
            })
        })
        return pieces;
    }

    addEventBoard(){
        this.canvas.addEventListener('click', (e) => {
            const {layerX, layerY} = e;
            let target;
            for ( let piece in GAME ){
                const limit = {
                    x: GAME[piece].x + GAME[piece].size,
                    y: GAME[piece].y + GAME[piece].size
                }
                const cond1 = layerX >= GAME[piece].x && layerX <= limit.x;
                const cond2 = layerY >= GAME[piece].y && layerY <= limit.y;
                if(cond1 && cond2){
                    target = GAME[piece];
                }
            }
            if( typeof target != 'undefined')
                console.log(target)
        })
    }
}