package introduction; /**
 * Created by edesimone on 02/07/16.
 * In this problem you will test your knowledge of Java loops. Given three integers , , and , output the following series:

 a+2°b,a+2°b+2¹b....,a+2°b+2¹b+..+2n-1b

 Input Format

 The first line will contain the number of testcases t. Each of the next  lines will have three integers, , , and .

 Constraints:
 0<= t <=500
 0<= a,n <=50
 0<= n <=15


 Output Format

 Print the answer to each test case in separate lines.

 Sample Input

 2
 0 2 10
 5 3 5
 Sample Output

 2 6 14 30 62 126 254 510 1022 2046
 8 14 26 50 98
 Explanation

 In the first case:

 1st term=0+1*2=2
 2nd term=0+1*2+2*2=6
 3rd term=0+1*2+2*2+4*2=14
 and so on.
 */

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class JavaLoops {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner sc=new Scanner(System.in);
        int cases=sc.nextInt();


        for(int i=0;i<cases;i++)
        {
            int a=sc.nextInt();
            int b=sc.nextInt();
            int n=sc.nextInt();
            getResult(a,b,n);
            System.out.println();
        }
    }

    private static void getResult(int a,int b,int n ){

        int result =0 ;
        int x = 2;

        for(int i=0;i<n;i++)
        {
            result += (int)Math.pow(x, i) * b;

            System.out.printf("%d ", a+result);
        }
    }




    int count;
    int position = -1;
    sort(nums);
    int[] respuesta = new int[maxes.length];
for (int a : maxes) {
        position++;
/* count = 0;
for (int b : nums) {
if (a >= b)
count++;
else
break;
}*/
        respuesta[position] = busquedaBinaria(nums, a) ;
// System.out.println (respuesta [position]+ " " );
    }
return respuesta;
}

    public static int busquedaBinaria(int vector[], int dato){
        int n = vector.length;
        int centro,inf=0,sup=n-1;
//System.out.print (dato + " " );
        while(inf<=sup){
            centro=(sup+inf)/2;
//System.out.print (centro + " centro " );
            if(vector[centro]>dato) return centro;
            else if(dato < vector [centro] ){
                sup=centro-1;
            }
            else {
                inf=centro+1;
            }
        }
        return vector.length;
    }

    public static void sort(int input[]) {
        sort(input, 0, input.length - 1);
    }

    private static void sort(int input[], int low, int high) {
        if (low >= high) {
            return;
        }

        int middle = (low + high) / 2;
        sort(input, low, middle);
        sort(input, middle + 1, high);
        sortedMerge(input, low, high);
    }

    private static void sortedMerge(int input[], int low, int high) {
        int middle = (low + high) / 2;
        int temp[] = new int[high - low + 1];
        int i = low;
        int j = middle + 1;
        int r = 0;
        while (i <= middle && j <= high) {
            if (input[i] <= input[j]) {
                temp[r++] = input[i++];
            } else {
                temp[r++] = input[j++];
            }
        }
        while (i <= middle) {
            temp[r++] = input[i++];
        }

        while (j <= high) {
            temp[r++] = input[j++];
        }
        i = low;
        for (int k = 0; k < temp.length; ) {
            input[i++] = temp[k++];
        }
    }
}