class Sort{
    constructor(name, orientation){
        this.name = name;
        this.comparisons = 0;
        this.swaps = 0;
        this.orientation = orientation;
    }

    swap(arr, i1, i2){
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
    }

    solve(array){
        console.log(`${this.name} does not implement solve()`);
    }

}

class BubbleSort extends Sort{
    constructor(){
        super("Bubble sort","VER");
        this.i = 0;
        this.j = 0;
    }

    solve(array){
        if (this.i < array.length){
            if (array[this.j] > array[this.j+1]){
                this.swap(array, this.j,this.j+1);
                notify(array,"VERI",this.j+1);
            }
            this.j++;
            if (this.j == array.length-1){
                this.j = 0;
                this.i++;
            }  
        }
    }
}