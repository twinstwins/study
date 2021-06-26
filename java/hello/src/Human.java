public class Human {

    private String name = null;
    private int age = -1;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String toString() {
        return "名前は" + name + "さんです。年は" + age + "歳です。";
    }
}

