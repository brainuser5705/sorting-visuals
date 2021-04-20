function generateArray(size, lbound, ubound){
    let arr = []
    for (let i=0;i<size;i++){
        arr.push(Math.floor(Math.random() * ubound) + lbound);
    }
    return arr;
}