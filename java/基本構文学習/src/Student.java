public class Student extends Human {

    private String school = null;

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String toString() {
        return "名前は" + getName() + "さんです。年は" + getAge() + "歳です。学校は" + school + "です。";
    }

}