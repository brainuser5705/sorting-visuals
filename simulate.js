var array = [];
var i = 0;
var j = 0;

var NUM_ELEMENTS = 100;
var DELAY = 100;

var algoNum = 2;

function setup(){
    createCanvas(500,500);
    generateArray();
    if (algoNum == 3){
        // for pancake sort
        i = array.length-1;
        drawRectangles(true);
    }else{
        i = 0;
        drawRectangles(false);
    }
}

function draw(){
    switch(algoNum){
        case 1: 
            bubbleSort();
            break;
        case 2:
            selectionSort();
            break;
        case 3:
            pancakeSort();
            break;
    }
}

function drawRectangles(isHori, index){
    background(0);
    fill(255);
    for (let k=0;k<array.length;k++){
        if (k == index){
            fill(255,0,0);
        }else{
            fill(255);
        }
        if (isHori){
            rectMode(CENTER);
            let yCoord = k * (height/NUM_ELEMENTS);
            rect(width/2, yCoord, array[k], (height/NUM_ELEMENTS));
        }else{
            rectMode(CORNER);
            let xCoord = k * (width/NUM_ELEMENTS);
            rect(xCoord,height,(width/NUM_ELEMENTS),-array[k]);
        }
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
        drawRectangles(false, minIndex);
    }else{
        noLoop();
    }
    i++;  
}

function bubbleSort(){
    if (i < array.length){
      if (array[j] > array[j+1]){
        swap(j,j+1);
        delay(DELAY);
        drawRectangles(false, j+1);
        }
        j++;
        i++;
        if (j == array.length-1){
            j = 0;
        }  
    }else{
        noLoop();
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
    if (i > 0){
        let maxIndex = 0;
        for (let k=1;k<=i;k++){
            if (array[k] > array[maxIndex]){
                maxIndex = k;
            }
        }
        flip(maxIndex);
        drawRectangles(true, maxIndex);
        delay(DELAY);
        flip(i);
        drawRectangles(true, i);
        delay(DELAY);
    }else{
        noLoop();
    }
    i--;
}

function generateArray(){
    for (let k=0;k<NUM_ELEMENTS;k++){
        array[k] = Math.floor(Math.random() * 500) + 1;
    }
}

function setAlgoNum(num){
    algoNum = num;
    let name = "";
    switch(num){
        case 1: 
            name = "bubble sort";
            break;
        case 2:
            name ="selection sort";
            break;
        case 3:
            name ="pancake sort";
            break;
    }
    document.getElementById("algo-name").innerHTML = name;
    setup();
    loop();
}


