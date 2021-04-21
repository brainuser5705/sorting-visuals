var array = []
var algo;
var numElements = document.getElementById("num-elements").value;

function setup(){
    createCanvas(500,500);
    algo = new BubbleSort();
    reset();
}

function draw(){
    algo.solve(array);
}

function reset(){
    array = generateArray(numElements,1,400);
    notify(array, algo.orientation, -1);
    loop();
}

function drawRectangles(array, orientation, index){
    background(0);
    for (let k=0;k<array.length;k++){

        if (k == index){
            fill(255,0,0);
        }else{
            fill(255);
        }

        if (orientation == "HORI"){
            rectMode(CENTER);
            let len = height/numElements;
            let yCoord = k * len;
            rect(width/2, yCoord, array[k], len);
        }else{
            rectMode(CORNER);
            let len = width/numElements;
            let xCoord = k * len;
            rect(xCoord,height,len,-array[k]);
        }
    }
}

function setAlgo(num){
    switch(num){
        case 1: 
            algo = new BubbleSort();
            break;
        case 2:
            algo = new SelectionSort();
            break;
        case 3:
            algo = new PancakeSort();
            break;
        case 4:
            algo = new InsertionSort();
            break;
        case 5:
            algo = new BogoSort();
            break;
        default:
            console.log("No algorithm " + num + " found");
    }
    reset(); // can have this as an option
}


function setNumElements(value){
    numElements = value;
    noLoop();
    reset();
}

function notify(array, highlight){
    drawRectangles(array, algo.orientation, highlight);
    
    document.getElementById("name").innerHTML = algo.name;
    document.getElementById("comparisons").innerHTML = algo.comparisons;
    document.getElementById("swaps").innerHTML = algo.swaps;

    //delay(100);
}

function notifyDone(){
    noLoop();
}

function delay(ms){
    var now = Date.now();
    var end = now + ms;
    while (now < end) { now = Date.now(); } 
}

