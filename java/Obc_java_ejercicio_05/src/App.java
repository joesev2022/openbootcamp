import java.util.ArrayList;
import java.util.List;

import entities.Coche;
import service.CocheCRUD;
import service.CocheCRUDImpl;

public class App {
    public static void main(String[] args) throws Exception {
        CocheCRUD crudCoche = new CocheCRUDImpl();
        Coche coche1 = new Coche("Toyota Yaris", 4, 250);
        Coche coche2 = new Coche("Audi", 4, 390);
        Coche coche3 = new Coche("Tesla X", 5, 370);
        List<Coche> coches = new ArrayList<>();
        System.out.println("Implementando interfaces para CRUD de Coches");
        System.out.println("--------------------------------------------");
        crudCoche.save(coche1);
        crudCoche.save(coche2);
        crudCoche.save(coche3);
        System.out.println("Mostrando Coches --------------------");
        coches = crudCoche.findAll();
        for (Coche coche : coches) {
            System.out.println(coche);
        }
        System.out.println("Eliminando un Coche -----------------");
        crudCoche.delete(coche1);
        System.out.println("Mostrando Coches --------------------");
        for (Coche coche : coches) {
            System.out.println(coche);
        }
    }
}
