package entities;

public class SmartDevice {

    //atributos
    private String marca;
    private String modelo;    
    private double pulgadasPantalla;
    private int almacenamientoInterno;
    private double ram;    

    //constructor
    public SmartDevice() {

    }

    public SmartDevice(String marca, String modelo, double pulgadasPantalla, int almacenamientoInterno, double ram) {
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadasPantalla = pulgadasPantalla;
        this.almacenamientoInterno = almacenamientoInterno;
        this.ram = ram;
    }

    // getters y setters
    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public double getPulgadasPantalla() {
        return pulgadasPantalla;
    }

    public void setPulgadasPantalla(double pulgadasPantalla) {
        this.pulgadasPantalla = pulgadasPantalla;
    }

    public int getAlmacenamientoInterno() {
        return almacenamientoInterno;
    }

    public void setAlmacenamientoInterno(int almacenamientoInterno) {
        this.almacenamientoInterno = almacenamientoInterno;
    }

    public double getRam() {
        return ram;
    }

    public void setRam(double ram) {
        this.ram = ram;
    }

    @Override
    public String toString() {
        return "SmartDevice [marca=" + marca + ", modelo=" + modelo + ", pulgadasPantalla=" + pulgadasPantalla
                + ", almacenamientoInterno=" + almacenamientoInterno + ", ram=" + ram + "]";
    }

}
