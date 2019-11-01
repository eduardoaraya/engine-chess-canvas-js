import Board from "./Board.js"

const dimensions = {
    size:50,
    margin:0,
    boardLength:8
};

const board = new Board('board',dimensions);
board.render((item,number) => {
    board.printBoard(item,number)
    // board.printPieces(item,number)
});
