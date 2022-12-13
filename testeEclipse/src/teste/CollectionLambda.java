package teste;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class CollectionLambda {

	public static void main(String[] args) {
		List<Integer> list = new ArrayList<>();
		list.add(1);
		list.add(2);
		list.add(3);
		list.add(4);

		list.forEach(x -> System.out.println(x));
		
		list.removeIf(x -> x % 2 == 0);
		list.forEach(x -> System.out.println(x));
		
		list.replaceAll(x -> x * 2);
		list.forEach(x -> System.out.println(x));

		
		HashMap<Integer, String> map = new HashMap<>();
		map.put(0, "Ilton");
		map.put(1, "Antonio");
		map.put(2, "Esteves");
		
		map.forEach((x,y) -> System.out.println("A chave "+ x + " contem " + y));
		
		map.compute(2, (x,y) -> y + "!");
		map.forEach((x,y) -> System.out.println("A chave "+ x + " contem " + y));
		
		map.merge(2, "!", (v1,v2) -> v1 + v2);
		map.forEach((x,y) -> System.out.println("A chave "+ x + " contem " + y));
		
		map.replaceAll((x,y) -> (x < 2 ?  y + "-" : y));
		map.forEach((x,y) -> System.out.println("A chave "+ x + " contem " + y));
	}

}
