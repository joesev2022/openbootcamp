package entities;

public class SmartPhone extends SmartDevice{

    private String camaraFrontal;
    private String camaraTrasera;

    public SmartPhone() {
    }

    public SmartPhone(String marca, String modelo, double pulgadasPantalla, int almacenamientoInterno, double ram,
            String camaraFrontal, String camaraTrasera) {
        super(marca, modelo, pulgadasPantalla, almacenamientoInterno, ram);
        this.camaraFrontal = camaraFrontal;
        this.camaraTrasera = camaraTrasera;
    }

    public String getCamaraFrontal() {
        return camaraFrontal;
    }

    public void setCamaraFrontal(String camaraFrontal) {
        this.camaraFrontal = camaraFrontal;
    }

    public String getCamaraTrasera() {
        return camaraTrasera;
    }

    public void setCamaraTrasera(String camaraTrasera) {
        this.camaraTrasera = camaraTrasera;
    }

    @Override
    public String toString() {
        return "SmartPhone [camaraFrontal=" + camaraFrontal + ", camaraTrasera=" + camaraTrasera 
                                            + ", Datos super: " + super.toString() + "]";
    }

    
}
