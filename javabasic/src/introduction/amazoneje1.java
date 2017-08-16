package introduction;

//maxes number in array

public class amazoneje1 {

    public static void solution (int[] nums, int[] maxes){

        int count;
        int position = -1;
        this.sort(nums);//implement mergesort
        int[] respuesta = new int[maxes.length];
        for (int a: maxes) {
            position++;
            count = 0;
            for (int b : nums){
                if (a>=b)
                    count++;
                else
                    break;
            }
            respuesta[position]=count;
        }
        return respuesta;
    }


    public void sort(int input[]){
        sort(input, 0, input.length-1);
    }

    private void sort(int input[], int low, int high){
        if(low >= high){
            return;
        }

        int middle = (low + high)/2;
        sort(input, low, middle);
        sort(input, middle+1, high);
        sortedMerge(input,low,high);
    }

    private void sortedMerge(int input[], int low, int high){
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
    int count;
    int position = -1;
    sort(nums);
    int[] respuesta = new int[maxes.length];
for (int a: maxes) {
        position++;
        count = 0;
        for (int b : nums){
            if (a>=b)
                count++;
            else
                break;
        }
        respuesta[position]=count;
    }
        return respuesta;
}

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
        }
