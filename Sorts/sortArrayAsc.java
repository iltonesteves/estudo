/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Sorts;

/**
 *
 * @author ghandi
 */
import java.util.Arrays;

public class sortArrayAsc {

	public static void main(String[] args) {
		int[] array = {4, 74, 14, 9, 3, 263, -74, 44, -79, 611 , 19}; 
		System.out.println("Current Array:"+Arrays.toString(array));
		//Current Array:[4, 74, 14, 9, 3, 263, -74, 44, -79, 611, 19]
		
		 int temporary;
	     for (int i = 0; i < array.length; i++) //we are looping every single element
	        {
	            for (int j = i + 1; j < array.length; j++) //and comparing with other array elements
	            {
	                if (array[i] > array[j])
	                {
	                	temporary =  array[i]; // keep the bigger value
	                    array[i] = array[j]; // update i indexed array element
	                    array[j] = temporary; // put back the value you have stored
	                }
	            }
	        }
 
	     System.out.println("Sorted Array: "+Arrays.toString(array));
	     //Sorted Array: [-79, -74, 3, 4, 9, 14, 19, 44, 74, 263, 611]
	}

}