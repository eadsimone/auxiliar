package introduction; /**
 * Created by edesimone on 03/06/16.
 *
 * Using "if-else" you can perform decision making in Java. See the flowchart below (taken from wikipedia):

 332px-If-Then-Else-diagram.svg.png

 This problem will test your knowledge on "if-else" statements.

 Given an integer  as input, check the following:

 If  is odd, print "Weird".
 If  is even and, in between the range of 2 and 5(inclusive), print "Not Weird".
 If  is even and, in between the range of 6 and 20(inclusive), print "Weird".
 If  is even and , print "Not Weird".
 We given you partially completed code in the editor, complete it to solve the problem.

 Input Format

 There is a single line of input: integer .

 Constraints


 Output Format

 Print "Weird" if the number is weird. Otherwise, print "Not Weird". Do not print the quotation marks.

 Sample Input 1

 3
 Sample Output 1

 Weird
 Sample Input 2

 24
 Sample Output 2

 Not Weird
 */
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

/*
if (number % 2 == 0) {
        // even
        } else {
        // odd
        }
*/

public class ifelse {

    public static void main(String[] args) {

        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        String ans="";
        if(n%2==1){
            ans = "Weird";
        }
        else
        if(n>2 && n<=5){
            ans = "Not Weird";
        }else
        if(n>6 && n<=20){
            ans = "Weird";
        }else
        if(n>20){
            ans = "Not Weird";
        }
        System.out.println(ans);

    }

    static int[] counts(int[] nums, int[] maxes) {
        int count;
        int position = -1;
        sort(nums);
        int[] answer = new int[maxes.length];
        for (int a: maxes) {
            position++;
            count = 0;
            for (int b : nums){
                if (a>=b)
                    count++;
                else
                    break;
            }
            answer[position]=count;
        }
        return answer;
    }

    //use a mergeSort algorithm to reduce the complexity
    public static void sort(int input[]){
        sort(input, 0, input.length-1);
    }

    private static void sort(int input[], int low, int high){
        if(low >= high){
            return;
        }
        int middle = (low + high)/2;
        sort(input, low, middle);
        sort(input, middle+1, high);
        sortedMerge(input,low,high);
    }

    private static void sortedMerge(int input[], int low, int high){
        int middle = (low+high)/2;
        int temp[] = new int[high-low+1];
        int i = low;
        int j = middle+1;
        int r = 0;
        while(i <= middle && j <= high){
            if(input[i] <= input[j]){
                temp[r++] = input[i++];
            }else{
                temp[r++] = input[j++];
            }
        }
        while(i <= middle){
            temp[r++] = input[i++];
        }

        while(j <= high){
            temp[r++] = input[j++];
        }
        i = low;
        for(int k=0; k < temp.length;){
            input[i++] = temp[k++];
        }
    }


    //-------------------------------------------
    static int[] counts(int[] nums, int[] maxes) {
        int count;
        int position = -1;
        sort(nums);
        int[] answer = new int[maxes.length];
        for (int a: maxes) {
            position++;
            count = 0;
            for (int b : nums){
                if (a>=b)
                    count++;
                else
                    break;
            }
            answer[position]=count;
        }
        return answer;
    }

    //use a mergeSort algorithm to reduce the complexity
    public static void sort(int input[]){
        sort(input, 0, input.length-1);
    }

    private static void sort(int input[], int low, int high){
        if(low >= high){
            return;
        }
        int middle = (low + high)/2;
        sort(input, low, middle);
        sort(input, middle+1, high);
        sortedMerge(input,low,high);
    }

    private static void sortedMerge(int input[], int low, int high){
        int middle = (low+high)/2;
        int temp[] = new int[high-low+1];
        int i = low;
        int j = middle+1;
        int r = 0;
        while(i <= middle && j <= high){
            if(input[i] <= input[j]){
                temp[r++] = input[i++];
            }else{
                temp[r++] = input[j++];
            }
        }
        while(i <= middle){
            temp[r++] = input[i++];
        }

        while(j <= high){
            temp[r++] = input[j++];
        }
        i = low;
        for(int k=0; k < temp.length;){
            input[i++] = temp[k++];
        }
    }

}
