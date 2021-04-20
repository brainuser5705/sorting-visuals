var nameText = "";
var comparisonsText = 0;
var swapsText = 0;
var array = []

algo = new PancakeSort();

function setup(){
    createCanvas(500,500);
    algo = new PancakeSort();
    nameText = algo.name;
    comparisonsText = algo.comparisons;
    swapsText = algo.swaps;
    array = generateArray(100,1,400);
    notify(array, algo.orientation, -1);
}

function draw(){
    algo.solve(array);
}

function drawRectangles(array, orientation, index){
    background(0);
    fill(255);
    for (let k=0;k<array.length;k++){
        if (k == index){
            fill(255,0,0);
        }else{
            fill(255);
        }
        if (orientation == "HORI"){
            rectMode(CENTER);
            let yCoord = k * (height/array.length);
            rect(width/2, yCoord, array[k], (height/array.length));
        }else{
            rectMode(CORNER);
            let xCoord = k * (width/array.length);
            rect(xCoord,height,(width/array.length),-array[k]);
        }
    }
}

function setAlgo(num){
    switch(num){
        case 1: 
            algo = new BubbleSort();
            break;
        case 2:
            algo = new PancakeSort();
            break;
        default:
            console.log("No algorithm " + num + " found");
    }
    setup();
    loop();
}


function setNumElements(value){
    numElements = value;
    drawRectangles();
}

function notify(array, orientation, highlight){
    drawRectangles(array, orientation, highlight);
    delay(50);
}

function delay(ms){
    var now = Date.now();
    var end = now + ms;
    while (now < end) { now = Date.now(); } 
}

