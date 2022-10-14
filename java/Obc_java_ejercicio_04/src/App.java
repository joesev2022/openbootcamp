import entities.SmartDevice;
import entities.SmartPhone;
import entities.SmartWatch;

public class App {
    public static void main(String[] args) throws Exception {
        SmartDevice smartPhone = new SmartPhone("Iphone", "A13", 6.1,
                                64, 3, "12MP", "Dual 12MP");
        SmartDevice smartWatch = new SmartWatch("Huawei", "GT3 Negro", 1.43,
                                2, 2, 0.042);
        System.out.println("Datos de accesorios inteligentes:");
        System.out.println("---------------------------------");
        System.out.println("Datos SmartPhone: ");
        System.out.println(smartPhone);
        System.out.println("Datos SmartWatch: ");
        System.out.println(smartWatch);
    }
}
