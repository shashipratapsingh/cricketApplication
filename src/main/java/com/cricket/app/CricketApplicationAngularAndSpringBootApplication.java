package com.cricket.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CricketApplicationAngularAndSpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(CricketApplicationAngularAndSpringBootApplication.class, args);
		int[] arr = {1, 5, 5, 8, 2};
		int maxIndex = 0;
		int max = arr[0]; // Assuming the first element as the initial max

		// Find the maximum value and its index
		for (int i = 1; i < arr.length; i++) {
			if (arr[i] > max) {
				max = arr[i];
				maxIndex = i;
			}
		}

		// Get the values on the left and right sides of the max value
		int leftValue = maxIndex > 0 ? arr[maxIndex - 1] : Integer.MIN_VALUE;
		int rightValue = maxIndex < arr.length - 1 ? arr[maxIndex + 1] : Integer.MIN_VALUE;

		System.out.println("Maximum value in the array: " + max);
		System.out.println("Value on the left side of the max: " + leftValue);
		System.out.println("Value on the right side of the max: " + rightValue);





	}

}
