public class Main {

    public static void main(String[] args) {
        test t = new test();
        int[] nums = new int[12];
        int[] maxes = new int[12];
        for (int i = 0; i<nums.length ; i++) {
            nums[i]= (int) (Math.random()*10);
            maxes[i]= (int) (Math.random()*10);
        }
        int[] respuesta = t.testear(nums, maxes);
        for (int i = 0; i<nums.length ; i++) {
            System.out.print (nums[i] + " " );
        }
        System.out.println (" " );

        for (int i = 0; i<nums.length ; i++) {
            System.out.print (maxes[i] + " " );
        }
        System.out.println (" " );

        for (int i = 0; i<nums.length ; i++) {
            System.out.print (respuesta[i] + " " );
        }
        System.out.println (" " );

       /* String[] nums = new String[10];
        String[] maxes = new String[10];
        int[] respuesta = new int[4];

        nums[0] = "hhpddlnnsjfoyxpci";
        nums[1] = "xulkowreuowzxgnhmiqekxhz" ;
        nums[2] = "dnqaurlp";
        nums[3] = "aujteqimwfkjoqodgqaxbrkrwykpmuimqtgulojjwtukjiqra";
        nums[4] = "lbafwuoawkxydlfcbjjtxpzpchzrvbtiev";
        nums[5] = "drngbjuuhmwqwxrinxccsqxkp";
        nums[6] = "ubu";
        nums[7] = "vxxzsqjqsnibgydzlyynqcrayvw";
        nums[8] = "xtnipeqhxvafqaggqoanvwk";
        nums[9] = "gqdvlchavotcykafyjzbbgmnlajiqlnwctrnvz";

        maxes[0] = "ioigvjqzfbpllssuj";
        maxes[1] = "istdocbnyozmnqthhpievvlj";
        maxes[2] = "lofnrtmh";
        maxes[3] = "sqejbvfbixnchzsahpnyayutsgecwvcqngzoehrmeeqlgknnb";
        maxes[4] = "qbpedlqbktorypcjkzzkodrpvosqzxmpad";
        maxes[5] = "wygwcdbtriwaesjsobrntzaqbe";
        maxes[6] = "lzt";
        maxes[7] = "jurfsqfrivayopgrxewwruvemzy";
        maxes[8] = "mthtfirwhmjrbphlmeluvoa";
        maxes[9] = "nspiwquxxsiwuldizqkkaawpyyisnftdzklwagv";

        respuesta = t.testear2(nums, maxes);

        for (int i = 0; i<nums.length ; i++) {
            System.out.print (nums[i] + " " );
        }
        System.out.println (" " );

        for (int i = 0; i<nums.length ; i++) {
            System.out.print (maxes[i] + " " );
        }
        System.out.println (" " );

        for (int i = 0; i<nums.length ; i++) {
            System.out.print (respuesta[i] + " " );
        }
        System.out.println (" " );*/
    }
}
