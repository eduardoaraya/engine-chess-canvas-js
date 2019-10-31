class Board{

    constructor(element,structure){
        this.canvas = document.getElementById(element);
        this.context = this.canvas.getContext('2d');
        this.structure = structure;
    }

    render(){
        this.structure.forEach((item,number) => {
            let color = (number%2 == 0) ? '#FAFAFA' : '#222';
            let lastcolor = '';
            item.forEach( pixel => {
                if(lastcolor)
                    color = lastcolor == '#222' ? '#FAFAFA' : '#222'
                this.context.fillStyle = color;
                lastcolor = color;
                this.context.fillRect( pixel.x, pixel.y, pixel.size, pixel.size);
            })
        })
    }
}