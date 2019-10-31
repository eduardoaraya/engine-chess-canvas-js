class Board{

    constructor(element,structure){
        this.canvas = document.getElementById(element);
        this.context = this.canvas.getContext('2d');
        this.structure = structure;
    }

    render(callback,object = null){
        this.structure.forEach((item,number) => {
            callback(item,number,object)          
        });
    }

    printBoard(item,number){
        let color = (number%2 == 0) ? '#FAFAFA' : '#222';
        let lastcolor = '';
        item.forEach( pixel => {
            if(lastcolor)
                color = lastcolor == '#222' ? '#FAFAFA' : '#222'
            this.context.fillStyle = color;
            lastcolor = color;
            this.context.fillRect( pixel.x, pixel.y, pixel.size, pixel.size);
        })
    }

    printPieces(item,number,game){
        const positions = item.map( (pixel,row) => {
            return {  
                column:number,
                row,
                w:pixel.size / 2,
                h:pixel.size / 2,
                x:pixel.x + ((pixel.size / 2) / 2),
                y:pixel.y + ((pixel.size / 2) / 2),
            }
        })
        let pieces = [];
        positions.forEach( pixel => {
            Object.values(game).forEach(item => {
                if( item.init.a.x.includes(pixel.column) && item.init.a.y.includes(pixel.row) ){
                    pieces.push({
                        x:pixel.x,
                        y:pixel.y,
                        w:pixel.w,
                        h:pixel.h,
                    });
                }
                if( item.init.b.x.includes(pixel.column) && item.init.b.y.includes(pixel.row) ){
                    pieces.push({
                        x:pixel.x,
                        y:pixel.y,
                        w:pixel.w,
                        h:pixel.h,
                    });
                }
            })
        })
        pieces.forEach(item=>{
            this.context.fillStyle = 'green';
            this.context.fillRect( item.x, item.y , item.w , item.h );
        })


    }
}