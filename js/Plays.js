import Canvas from './Canvas.js';
import { plays } from './game.js';

export default class Plays extends Canvas {

    pieceSelected = null;

    constructor(canvas,dimensions){
        super(canvas,dimensions)
    }

    selectPiece(target,destiny,move){

        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);

        if(target){
            this.pieceSelected = target;
            this.context.fillStyle = 'green'
            this.context.fillRect(target.x, target.y, target.size, target.size);
        }else if(!target && this.pieceSelected ){
            move([this.pieceSelected,destiny]);
            this.pieceSelected = null
        }else{
            this.pieceSelected = null;
        }
    }

    // Object.values(GAME).forEach(piece => {
        // if(target.target == piece.target){
            // console.log(target)
            // const base_image = new Image();
            // base_image.src = piece.img;
            // base_image.onload = () => this.context.drawImage(base_image, piece.x, piece.y, piece.size, piece.size);
    //     }
    // })

}