import Model from './Model.js';

export default class Canvas{

    constructor(element, dimensions) {
        this.canvas = document.getElementById(element);
        this.context = this.canvas.getContext('2d');
        this.model = new Model(dimensions)
        this.init(dimensions)
    }

    init(dimensions){
        const { height , width } = dimensions;
        if( typeof height != 'undefined' && typeof width != 'undefined' ){
            this.canvas.width = width;
            this.canvas.height = height;
            dimensions.size = (this.canvas.width) / dimensions.boardLength;
        }else{
            this.canvas.width = dimensions.boardLength * dimensions.size;
            this.canvas.height = dimensions.boardLength * dimensions.size;
        }
    }

    render() {
      throw new Error('render is not defined')
    }


    
}