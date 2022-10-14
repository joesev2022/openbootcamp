package funciones;

public class Funciones {
    private final static double IVA = 0.18;
    //Creando una función que reciba un precio y devuelva el precio con el IVA incluido
    public double precioConIVA (double precio){
        double igv;
        igv = precio * IVA;
        return precio + igv;
    }

}
