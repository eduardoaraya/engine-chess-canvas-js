import Model from './Model.js';

export default class Canvas{

    constructor(element, dimensions) {
        this.canvas = document.getElementById(element);
        this.context = this.canvas.getContext('2d');
        this.model = new Model(dimensions)
    }

    render(callback) {
        this.model.grid.forEach((item, number) => callback(item, number));
    }
    
}