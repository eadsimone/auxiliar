package introduction;

//import java.util.Arrays;
import java.util.*;
import java.io.*;

public class BinarySearch {

    public static int rank(int key, int[] a){

        int lo = 0;
        int hi = a.length -1;

        while(lo <= hi){
            int mid = lo + (lo + hi)/2;
            if (key < a[mid]) hi = mid-1;
            if (key > a[mid]) lo = mid+1;
            else
                return mid;
        }
        return -1;
    }

    public static void main(String[] args){

        //int[] whitelist = In.readInts(args[0]); libro
        int[] whitelist = new int[]{1,2,3};
        Scanner sc = new Scanner(System.in);
        int t=sc.nextInt();
        Arrays.sort(whitelist);

        /*while(!StdIn.isEmpty())// libro
        */{
            //int key = StdIn.readInt(); libro
            int key = 8;
            if (rank(key, whitelist) == -1)
                //Stdout.prinln(key); libro
                System.out.println(key);
        //}
    }


}
