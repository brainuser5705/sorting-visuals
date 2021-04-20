class SelectionSort extends Sort{
    constructor(){
        super("Selection sort", "VER");
        this.i = 0;
        this.j = 0;
    }

    solve(array){
        let minIndex = this.i;
        for (let k=this.i+1;k<array.length;k++){
            if(array[minIndex] > array[k]){
                minIndex = k;
                this.comparisons++;
            }
        }
        this.swap(array, minIndex, this.i);
        this.swaps++;
        notify(array, this.i);
        this.i++;
        if (this.i == array.length-1){
            notifyDone();
        }
    }

}