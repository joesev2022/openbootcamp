public class App {
    public static void main(String[] args) throws Exception {
        String resultadoContatenado = "";
        String[] nombres = {"Juan", "Pablo", "Roberto", "Chespirito"};
        for (String nombre : nombres) {
            resultadoContatenado+=nombre;
        }
        System.out.println("El resultado contatenado es: " + resultadoContatenado);
    }
}
