package teste;

import java.util.stream.IntStream;

public class FormasLambda {

	public static void main(String[] args) {

		// parênteses
		Runnable runnable = () -> System.out.println("iae");

		IntStream.range(0, 5)
		.filter(n -> n % 2 == 0)
		.forEach(System.out::println);

		IntStream.range(0, 5).filter(n -> {
			System.out.println("Numero " + n);
			return n % 2 == 0;
		}).forEach(System.out::println);

		IntStream.range(0, 5)
		.filter((int n) -> n % 2 == 0)
		.reduce((n1, n2) -> n1 + n2)
		.ifPresent(n -> System.out.println("Total= " + n));
	}

}
