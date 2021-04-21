class InsertionSort extends Sort{
    constructor(){
        super("Insertion sort", "VERT");
        this.i = 1;
    }

    solve(array){
        if (this.i < array.length){
            let element = array[this.i];
            let k = this.i-1;
            while (array[k] > element){
                this.swap(array, k, k+1);
                notify(array, k);
                this.swaps++;
                this.comparisons++;
                k--;
            }
            array[k] = element;
            notify(array, this.i);
            this.i++; 
        }else{
            notifyDone();
        }
    }
}