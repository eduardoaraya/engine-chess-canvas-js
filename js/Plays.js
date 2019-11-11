import Canvas from './Canvas.js';
import { plays } from './game.js';

export default class Plays extends Canvas {

    pieceSelected = null;

    constructor(canvas,dimensions,Pieces){
        super(canvas,dimensions)
        this._pieces = Pieces;
        this.listenerClick()
    }

    selectPiece(event){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        const [target, destiny] = this._pieces.handleClick(event)
        if(target){
            this.pieceSelected = target;
            this.context.fillStyle = 'green'
            this.context.fillRect(target.x, target.y, target.size, target.size);
        }else if(!target && this.pieceSelected ){
            this._pieces.movePiece(this.pieceSelected,destiny);
            this.pieceSelected = null
        }else{
            this.pieceSelected = null;
        }
    }

    listenerClick() {
        this._pieces
            .canvas
            .addEventListener('click', (event) => this.selectPiece(event))
    }


}