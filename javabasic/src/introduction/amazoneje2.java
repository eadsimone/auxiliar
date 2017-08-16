package introduction;

//anagrams

public class amazoneje2 {

    public static void solution(){
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
            int indice = 0;
            for (char letra: word1) {
                for (int i2=indice ; i2 < b.length(); i2++){
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
                }

            }
        }
        return cambios;
    }
