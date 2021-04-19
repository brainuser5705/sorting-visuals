int[] array = new int[]{9,6,4,8,0,12,6,4,2,3,10};
int i = 0;
int j = 0;

void setup(){
   size(500, 500);
   refreshRects();
   printArray();
}

void draw(){
   if (array[j] > array[j+1]){
       swap(j,j+1);
       delay(200);
       printArray();
       refreshRects();
   }
   j++;
   if (j == array.length-1){
     j = 0;
   }
}

void drawRect(int index, int value){
  int x = (index * 20);
  rect(x,height,20,value*-20);
}

void refreshRects(){
  background(0);
  for (int k = 0; k < array.length; k++){
    drawRect(k, array[k]);
  }
}

void swap(int index1, int index2){
  int temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

void test(){
  background(0);
}

void printArray(){
  String result = "[";
  String prefix = "";
  for (int n : array){
     result += prefix + n;
     prefix = ",";
  }
  result += "]";
  System.out.println(result);
}
