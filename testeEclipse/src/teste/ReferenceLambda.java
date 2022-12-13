package teste;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ReferenceLambda {

	public static void main(String[] args) {
		List<Integer> list = Arrays.asList(1,2,3,4,5);
		list.stream()
		.forEach(System.out::println);

		list.stream()
		.map((n) -> M2(n))
		.forEach(System.out::println);

		list.stream()
		.map(ReferenceLambda:: M2)
		.forEach(System.out::println);

		list.stream()
		.map((n) -> new BigDecimal(n))
		.forEach(System.out::println);
		list.stream()
		.map(BigDecimal::new)
		.forEach(System.out::println);
		
		list.stream()
		.map((n) -> n.doubleValue())
		.forEach(System.out::println);

		list.stream()
		.map(Integer::doubleValue)
		.forEach(System.out::println);

		BigDecimal dois = new BigDecimal(2);
		list.stream()
		.map(BigDecimal::new)
		.map(x -> dois.multiply(x))
		.forEach(System.out::println);

		list.stream()
		.map(BigDecimal::new)
		.map(dois::multiply)
		.forEach(System.out::println);

	}
	private static Integer M2(Integer i) {
		return i * 2;
	}

}
