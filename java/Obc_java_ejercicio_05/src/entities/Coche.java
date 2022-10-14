package entities;

public class Coche {
    private String modelo;
    private int puertas;
    private double velocidad;
    public Coche() {
    }
    public Coche(String modelo, int puertas, double velocidad) {
        this.modelo = modelo;
        this.puertas = puertas;
        this.velocidad = velocidad;
    }
    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public int getPuertas() {
        return puertas;
    }
    public void setPuertas(int puertas) {
        this.puertas = puertas;
    }
    public double getVelocidad() {
        return velocidad;
    }
    public void setVelocidad(double velocidad) {
        this.velocidad = velocidad;
    }
    @Override
    public String toString() {
        return "Coche [modelo=" + modelo + ", puertas=" + puertas + ", velocidad=" + velocidad + "]";
    }
}
