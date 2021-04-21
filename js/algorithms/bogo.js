class BogoSort extends Sort{
    constructor(){
        super("Bogo sort", "VER");
        this.permutations = [];
    }

    // user options for randomness
    randomPerm(array){
        let randTimes = Math.floor(Math.random()*3) + 1;
        for (let i = 0; i < randTimes; i++){
            let r1 = Math.floor(Math.random()*(array.length));
            let r2 = Math.floor(Math.random()*(array.length));
            this.swap(array, r1,r2);
        }
        this.comparisons++;
    }

    isSorted(array){
        for (let i = 0; i < array.length-1; i++){
            if (array[i] > array[i+1]){
                return false;
            }
        }
        return true;
    }

    solve(array){
        this.randomPerm(array)
        if (this.isSorted(array)){
            notifyDone();
        }
        notify(array, -1);
    }

    // random one?
    
}