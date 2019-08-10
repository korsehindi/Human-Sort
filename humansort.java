//Very Simple Human Sort in Java

import java.util.Arrays;

public class SimpleHumanLikeSort {

    public static void main(String arguments[]){

        int ages[] = {21, 42, 56, 5, 4};

        boolean swapped;
        do{
            swapped = false;
            for(int i = 0; i < ages.length-1; i++){
                int i1 = i + 1;

                if (ages[i] > ages[i1]){
                    // swap
                    int tmp = ages[i];
                    ages[i] = ages[i1];
                    ages[i1] = tmp;
                    swapped = true;
                }
            }
            System.out.println(Arrays.toString(ages));
        } while(swapped);

    }
}
