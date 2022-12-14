package teste;

import java.util.Optional;
import java.util.stream.Stream;

public class OptionLambda {

	public static void main(String[] args) {

		Stream.of(1, 2, 3).findFirst().ifPresent(System.out::println);

		String s = "1";
		s = "iae";
		convert(s).ifPresent(System.out::println);
//		System.out.println(convert(s).get());
		System.out.println(convert(s).orElse(5));
		System.out.println(convert(s).orElseGet(() -> 9));
		System.out.println(convert(s).orElseThrow(() -> new NullPointerException("Valor inválido!")));

	}

	private static Optional<Integer> convert(String str) {
		try {
			return Optional.of(Integer.parseInt(str));
		} catch (Exception e) {
			return Optional.empty();
		}
	}
}
