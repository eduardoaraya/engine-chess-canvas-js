import Canvas from './Canvas.js';
import GAME , { config } from "./game.js"

export default class Pieces extends Canvas {

    constructor(canvas,dimensions){
        super(canvas,dimensions);
    }

    initGame(item, column) {
        const pieces = this.initialPositionPieces(item, column);
        pieces.forEach(piece => {
            const base_image = new Image();
            base_image.src = piece.img;
            base_image.onload = () => this.context.drawImage(base_image, piece.x, piece.y, piece.size, piece.size);

            if ([piece.id + '_B'] in GAME){
                GAME[piece.id + '_A'] = piece;
                GAME[piece.id + '_A'].target = piece.id + '_A';
            }else{
                GAME[piece.id + '_B'] = piece;
                GAME[piece.id + '_B'].target = piece.id + '_B';
            }
        })
    }

    initialPositionPieces(item, column) {
        let pieces = [];
        item.forEach((pixel, row) => {
            Object.values(config.pieces).forEach(item => {
                if (item.cordinates.a.x.includes(column) && item.cordinates.a.y.includes(row)) {
                    pieces.push({
                        piece:item.name,
                        color: 'white',
                        id: this.getIdPiece(item.name,column),
                        ...pixel,
                        img: item.images.a
                    });
                }
                if (item.cordinates.b.x.includes(column) && item.cordinates.b.y.includes(row)) {
                    pieces.push({
                        piece:item.name,
                        color: 'black',
                        id: this.getIdPiece(item.name,column),
                        ...pixel,
                        img: item.images.b
                    });
                }
            })
        })
        return pieces;
    }

    getIdPiece(name,column){
        if(name == 'peao')
            return `P${column}`
        if(name == 'cavalo')
            return `C${column}`
        if(name == 'bispo')
            return `B${column}`
        if(name == 'torre')
            return `T${column}`
        return name;
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
        return null;
    }

    addEventBoard(event) {
        this.canvas.addEventListener('click', (e) => {
            const piece = this.getPieceFromClick(e);
            event(piece);
        })
    }
}