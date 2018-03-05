/**
 * Created by edesimone on 05/08/17.
 */


import java.io.IOException;
import java.util.Arrays;


public class test {
    public static int[] testear(int[] nums, int[] maxes) {
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
        //    System.out.println (respuesta [position]+ " " );
        }
        return respuesta;
    }

    public static int busquedaBinaria(int  vector[], int dato){
        int n = vector.length;
        int centro,inf=0,sup=n-1;
        //System.out.print (dato + " " );
        while(inf<=sup){
            centro=(sup+inf)/2;
            //System.out.print (centro + " centro  " );
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


    public static int[] testear2(String[] a, String[] b) {
        int[] respuesta = new int[a.length];
        for (int i=0 ; i<a.length ; i++){
            respuesta[i] = areAnagrams(a[i], b[i]);
        }
        return respuesta;
    }

    public static int areAnagrams(String a, String b){
        int cambios = 0;
        if (a.length()!=b.length())
            return -1;
        else {
            char[] word1 = a.replaceAll("[\\s]", "").toCharArray();
            char[] word2 = b.replaceAll("[\\s]", "").toCharArray();
            Arrays.sort(word1);
            Arrays.sort(word2);
           // System.out.println(word1);
          //  System.out.println(word2);
            int indice = 0;
            for (int  i = 0 ; i<a.length(); i++) {
                char letra = word1[i];
                if (indice >= b.length()){
                    cambios = cambios + a.length() - i ;
                    break;
                }
                for (int i2=indice ; i2 < b.length(); i2++){
                   // System.out.println("comparando " + letra + " " + word2[i2] + " " + cambios);
                   /* try {
                        System.in.read();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }*/
                    if (word2[i2] == letra) {
                        indice = i2+1;
                        break;
                    } else
                        if (word2[i2] > letra) {
                            cambios++;
                            indice = i2 ;
                            break;
                        }
                    indice=i2;
                    if (a.length()-1 == i2)
                        cambios++;
                    //System.out.println("comparado " + letra + " " + word2[i2] + " " + cambios + " " + i2);

                }

            }
        }
        return cambios;
    }
}