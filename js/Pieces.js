import Canvas from './Canvas.js';
import GAME , { config, plays as PLAYS } from "./game.js"

export default class Pieces extends Canvas {

    constructor(canvas,dimensions){
        super(canvas,dimensions);
        this.initGame();
    }

    initGame() {
        for (let item of this.model.grid){
            Object.values(config.pieces).forEach(piece => {
                if (piece.cordinates.a.x.includes(item.column) && piece.cordinates.a.y.includes(item.row)) {
                    let _id = this.getIdPiece(piece.name,item.column,'A')
                    this.insertGame(_id,piece.name,'white',piece.images.a,item);
                    this.printPiece(piece.images.a,item.x,item.y,item.size);
                }
                if(piece.cordinates.b.x.includes(item.column) && piece.cordinates.b.y.includes(item.row)) {
                    let _id = this.getIdPiece(piece.name,item.column,'B')
                    this.insertGame(_id,piece.name,'black',piece.images.b,item);
                    this.printPiece(piece.images.b,item.x,item.y,item.size);
                }
            })
        }
    }
    
    insertGame(_id,piece,color,img,item){
        GAME[_id] = { _id, piece, color, img,...item };      
    }
    
    printPiece(image,x,y,size){
        const base_image = new Image();
        base_image.src = image;
        base_image.onload = () => this.context.drawImage(base_image, x, y, size, size);
    }


    getIdPiece(name,column,sufix){
        switch(name){
            case 'peao':
                return `PEAO${column}_${sufix}`
            case 'cavalo':
                return `CAVALO${column}_${sufix}`
            case 'bispo':
                return `BISPO${column}_${sufix}`
            case 'torre':
                return `TORRE${column}_${sufix}`
            case 'rei':
                return `REI${column}_${sufix}`
            case 'rainha':
                return `RAINHA${column}_${sufix}`
            default:
                return name;
        }
    }

    getPieceFromClick({layerX, layerY}){
        for (let piece in GAME) {
            const limit = {
                x: GAME[piece].x + GAME[piece].size,
                y: GAME[piece].y + GAME[piece].size
            }
            const cond1 = layerX >= GAME[piece].x && layerX <= limit.x;
            const cond2 = layerY >= GAME[piece].y && layerY <= limit.y;
            if (cond1 && cond2)
                return GAME[piece];
        }
        return false;
    }

    getDestinyFromClick({layerX, layerY}){
        const item = this.model.grid;
        for( let i = 0 ; i < item.length ; i ++ ){
            const pixel = item[i];
            const limit = {
                x: pixel.x + pixel.size,
                y: pixel.y + pixel.size
            }
            const cond1 = layerX >= pixel.x && layerX <= limit.x;
            const cond2 = layerY >= pixel.y && layerY <= limit.y;
            if (cond1 && cond2)
                return pixel;
        }
        return false;
    }

    handleClick(event){
        return [this.getPieceFromClick(event),this.getDestinyFromClick(event)];
    }

    movePiece(piece, destiny){
        console.log(piece)
        this.context.clearRect(piece.x,piece.y,piece.size,piece.size);
        GAME[piece._id].x = destiny.x;
        GAME[piece._id].y = destiny.y;
        const base_image = new Image();
        base_image.src = piece.img;
        base_image.onload = () => this.context.drawImage(base_image, destiny.x, destiny.y, piece.size, piece.size);
    }
}