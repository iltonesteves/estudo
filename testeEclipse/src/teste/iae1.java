package teste;
public class iae1 {

	public static void main(String[] args ) {
	new Thread(new Runnable() {
			
			@Override
			public void run() {
				// TODO Auto-generated method stub
				System.out.println("iae");
			}
		}).run();
		
	new Thread(() -> System.out.println("iae ...")).run();
	
	}
}
