class DataStructure{

    constructor({
        size,
        margin,
        boardLength
    }){
        this.size = size;
        this.margin = margin;
        this.boardLength = boardLength;
    }

    get structure(){
        return this.definePositions();
    }

    set structure(structure){
        throw new Error('Error')
    }

    defineColumns(){

        let columns = [];

        for ( let x = 0 ; x < this.boardLength ; x++ )
            columns.push({ x:1,y:1 });
        
        return columns;
    }

    defineRows(){

        const columns = this.defineColumns();
        let row = [];

        for ( let x = 0 ; x < this.boardLength ; x++ )
            row.push(columns);
        
        return row;
    }

    definePositions() {
        return this.defineRows().map((row,numberRow) => {
            return row.map((column,numberColumn) => {
                return {
                    x: numberColumn * (this.size + this.margin),
                    y: numberRow * (this.size + this.margin),
                    size: this.size
                };
            })
        });
    }

    defineExternalPositions(x,y) {
        return this.defineRows().map((row,numberRow) => {
            return row.map((column,numberColumn) => {
                return {
                    x: numberColumn * x,
                    y: numberRow * y,
                    size: this.size
                };
            })
        });
    }
}
