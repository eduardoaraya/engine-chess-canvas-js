import Board from "./Board.js"
import Pieces from "./Pieces.js"
import Plays from "./Plays.js"


const dimensions = {
    size:50,
    margin:0,
    boardLength:8
};

const board = new Board('board',dimensions);
board.render((item,number) => board.printBoard(item,number));

const pieces = new Pieces('pieces',dimensions);
pieces.render((item,number) => pieces.initGame(item,number));

const plays = new Plays('plays',dimensions);

pieces.addEventBoard((target) => {
    plays.selectPiece(target)
});
