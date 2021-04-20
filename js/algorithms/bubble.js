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
                this.swaps++;
                notify(array,this.j+1);
            }
            this.j++;
            this.comparisons++;
            if (this.j == array.length-1){
                this.j = 0;
                this.i++;
            }  
        }else{
            notifyDone();
        }
    }
}