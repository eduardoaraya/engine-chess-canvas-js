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
        let color = (number%2 == 0) ? '#FFF' : '#666';
        let lastcolor = '';
        item.forEach( pixel => {
            if(lastcolor)
                color = lastcolor == '#666' ? '#FFF' : '#666'
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
                w:pixel.size,
                h:pixel.size,
                x:pixel.x,
                y:pixel.y,
            }
        })
        let pieces = [];
        positions.forEach( pixel => {
            Object.values(game).forEach(item => {
                if( item.cordinates.a.x.includes(pixel.column) && item.cordinates.a.y.includes(pixel.row) ){
                    pieces.push({
                        x:pixel.x,
                        y:pixel.y,
                        w:pixel.w,
                        h:pixel.h,
                        img:item.images.a
                    });
                }
                if( item.cordinates.b.x.includes(pixel.column) && item.cordinates.b.y.includes(pixel.row) ){
                    pieces.push({
                        x:pixel.x,
                        y:pixel.y,
                        w:pixel.w,
                        h:pixel.h,
                        img:item.images.b
                    });
                }
            })
        })
        pieces.forEach( item => {
            const base_image = new Image();
            base_image.src = item.img;
            base_image.onload = () => {
              this.context.drawImage(base_image, item.x, item.y , item.w , item.h );
            }
        })
    }
}