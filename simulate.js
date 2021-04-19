var array = [];
var i = 0;
var j = 0;

var NUM_ELEMENTS = 100;
var DELAY = 5;

function setup(){
    createCanvas(1000,500);
    for (let k=0;k<NUM_ELEMENTS;k++){
        array[k] = Math.floor(Math.random() * NUM_ELEMENTS) + 1;
    }
    // for pancake sort
    //i = array.length-1;
    drawRectangles();
}

function draw(){
    bubbleSort();
    //selectionSort();
    //pancakeSort();
}

function drawRectangles(){
    background(0);
    fill(255);
    for (let k=0;k<array.length;k++){
        let xCoord = k * (width/NUM_ELEMENTS);
        rect(xCoord,height,(width/NUM_ELEMENTS),-array[k]);
    }
}

function swap(index1, index2){
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function flip(index){
    let mid = Math.floor(index/2);
    for (let k=0;k<=mid;k++){
        swap(k,index-k);
    }
}

function selectionSort(){
    if (i < array.length-1){
        let minIndex = i;
        for(let k = i+1; k < array.length; k++){
            if (array[minIndex] > array[k]){
                minIndex = k;
            }
        }
        swap(minIndex, i);
        delay(DELAY);
        drawRectangles();
    }else{
        noLoop();
    }
    i++;  
    
}

function bubbleSort(){
    if (array[j] > array[j+1]){
        swap(j,j+1);
        delay(DELAY);
        drawRectangles();
    }
    j++;
    if (j == array.length-1){
        j = 0;
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function delay(ms){
    var now = Date.now();
    var end = now + ms;
    while (now < end) { now = Date.now(); } 
}

function pancakeSort(){
    if (i > 1){
        let maxIndex = 0;
        for (let k=1;k<i;k++){
            if (array[k] > array[maxIndex]){
                maxIndex = k;
            }
        }
        flip(maxIndex);
        drawRectangles();
        delay(DELAY);
        flip(i);
        drawRectangles();
        delay(DELAY);
    }else{
        noLoop();
    }
    i--;
}
