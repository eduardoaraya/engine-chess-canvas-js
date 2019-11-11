import Board from "./Board.js"
import Pieces from "./Pieces.js"
import Plays from "./Plays.js"


const dimensions = {
    size:50,
    margin:0,
    boardLength:8,
    width:400,
    height:400
};

const board = new Board('board',dimensions);
const plays = new Plays('plays',dimensions,new Pieces('pieces',dimensions));


