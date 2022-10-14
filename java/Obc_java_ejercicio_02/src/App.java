import java.util.Scanner;

import funciones.Funciones;

public class App {
    public static void main(String[] args) throws Exception {
        Funciones func = new Funciones();
        double precioConIva;
        Scanner sc = new Scanner(System.in);
        System.out.println("Calculando el precio con IVA");
        System.out.println("----------------------------");
        System.out.println("Ingrese precio base: ");
        precioConIva = sc.nextDouble();
        System.out.println("El precio con IVA es: " + func.precioConIVA(precioConIva));        
    }
}
