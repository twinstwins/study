public class StaticTest {
    // static変数とはインスタンスを生成せずに使える変数のことを指す
    // 全てのインスタンスが共通するプロパティとなる
    public static int staticNumCounter = 0;

    // staticメソッドとは、インスタンスを生成せずに使えるメソッドのこと
    public static void printstaticNum() {
        System.out.println("静的変数を出力するよ");
        System.out.println(staticNumCounter);
    }

    public StaticTest() {
        staticNumCounter++;
    }
}

class Count {
    public static void main(String[] args) {
        StaticTest x = new StaticTest();
        StaticTest y = new StaticTest();
        StaticTest z = new StaticTest();

        StaticTest.printstaticNum();
    }
}