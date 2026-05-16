import java.util.Arrays;

public class Assign {


public static void main (String[] seunfunmi){
int[] numbers = {23,34,89,90,34,23};
    
    printEvenIndex(numbers);
      int [] number2 = printEvenIndex2(numbers);
      System.out.print(Arrays.toString(number2));
   
 }
    
  
    
    
public static void printEvenIndex(int[] arr ) {
        for(int count = 0; count < arr.length; count++) {
        if(count % 2 == 0) System.out.print(arr[count]+ ",");
         
        }

}

public static int [] printEvenIndex2(int[] arr ) {
       int[]numbers = new int[arr.length/2];
        int index=0;
        for(int count = 0; count < arr.length; count++) {
            if(count % 2 == 0) numbers[index++]=arr[count];
        
        }
return numbers;

}
}
