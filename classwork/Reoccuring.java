public class Reoccuring {
public static void main(String[] seunfunmi) {

int[] numbers = {1,2,2,2,3};
   
    System.out.print(reoccuringNumbers(numbers));
    }


    public static int reoccuringNumbers(int[] number) {
    
    int count = 0;
    for(int num = 0; num < number.length; num++) {
   
   for(int row = 0; row < number.length -1; row++) {
   
            if(number[num] == number[row]) {
                count++;
                    
   
   }
   
   
   }}
  return count;
   
    }
    
    }
    
    
    





