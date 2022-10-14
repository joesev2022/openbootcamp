package entities;

public class SmartWatch extends SmartDevice{
    private double peso;

    public SmartWatch() {
    }

    public SmartWatch(String marca, String modelo, double pulgadasPantalla, int almacenamientoInterno, double ram,
            double peso) {
        super(marca, modelo, pulgadasPantalla, almacenamientoInterno, ram);
        this.peso = peso;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    @Override
    public String toString() {
        return "SmartWatch [peso=" + peso + ", Datos super: " + super.toString() + "]";
    }

}
