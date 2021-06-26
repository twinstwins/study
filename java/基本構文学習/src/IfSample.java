import java.util.Scanner;

public class IfSample {
    public static void main(String[] args) {

        System.out.println("入力してください。");

        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();

        if (num >= 10) {
            System.out.println("やったね");
        } else {
            System.out.println("残念でした");
        }
    }
}
