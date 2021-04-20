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