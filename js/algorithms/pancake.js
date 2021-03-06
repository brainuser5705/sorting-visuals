class PancakeSort extends Sort{
    constructor(){
        super("Pancake sort", "HORI");
        this.i = array.length-1;
    }

    flip(array, index){
        let mid = Math.floor(index/2);
        for (let k=0;k<=mid;k++){
            this.swap(array, k,index-k);
        }
    }

    solve(array){
        if (this.i > 0){
            let maxIndex = 0;
            for (let k=1;k<=this.i;k++){
                if (array[k] > array[maxIndex]){
                    maxIndex = k;
                }
                this.comparisons++;
            }
            this.flip(array, maxIndex);
            notify(array, maxIndex);
            this.flip(array, this.i);
            notify(array, this.i);
            this.swaps += 2;
        }else{
            notifyDone();
        }
        this.i--;
    }
}