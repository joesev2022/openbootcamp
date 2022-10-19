import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Vector;

public class App {
    public static void main(String[] args) throws Exception {

        //Crea un array unidimensional de Strings y recórrelo, mostrando únicamente sus valores.

        System.out.println("--------------------------------");
        System.out.println("Ejercicio Array Unidimensional: "); 
        String[] arrayString = {"Hola", "Soy", "José"};
        for(int i = 0; i < arrayString.length; i++){
            System.out.println(arrayString[i]);
        }
        System.out.println("--------------------------------");

        //Crea un array bidimensional de enteros y recórrelo, mostrando la posición y el valor de cada elemento en ambas dimensiones.

        System.out.println("--------------------------------");
        System.out.println("Ejercicio Array Bidimensional: "); 
        int[][] arrayBidiEnteros = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        for(int i = 0; i < arrayBidiEnteros.length; i++){
            for(int j = 0; j < arrayBidiEnteros[i].length; j++){
                System.out.println("Fila: " + i + " , Columna: " + j + ":" + arrayBidiEnteros[i][j]);
            }
        }
        System.out.println("--------------------------------");

        //Crea un "Vector" del tipo de dato que prefieras, y añádele 5 elementos. Elimina el 2o y 3er elemento y 
        //muestra el resultado final.

        System.out.println("--------------------------------");
        System.out.println("Ejercicio Vector: ");        
        Vector<String> vector = new Vector<String>();
        String[] arrayString_2 = {"Manuel", "Alfredo", "Marco", "Roberto", "Samuel"};        
        for (int i = 0; i < arrayString_2.length; i++) {
            vector.add(arrayString_2[i]);
        }
        for (int i = 0; i < vector.size(); i++) {
            if(vector.get(i).equals("Alfredo")){
                vector.remove(i);
            }
            if(vector.get(i).equals("Marco")){
                vector.remove(i);
            }
        }
        System.out.println(vector);
        System.out.println("--------------------------------");

        //Indica cuál es el problema de utilizar un Vector con la capacidad por defecto si tuviésemos 1000 elementos 
        //para ser añadidos al mismo.

        System.out.println("--------------------------------");
        System.out.println("Ejercicio indicando \"error\" de Vector: "); 
        try {
            Vector<String> vector_2 = new Vector<String>();
            String[] arrayString_3 = new String[1000];
            for (int i = 0; i < arrayString_3.length; i++) {
                arrayString_3[i] = "" + i;
            }        
            for (int i = 0; i < arrayString_3.length; i++) {
                vector_2.add(arrayString_3[i]);
            }
            System.out.println("Vector 2: " + vector_2);
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println("--------------------------------");

        //Crea un ArrayList de tipo String, con 4 elementos. Cópialo en una LinkedList. Recorre ambos mostrando únicamente 
        //el valor de cada elemento.

        System.out.println("--------------------------------");
        System.out.println("Ejercicio copiar ArrayList a LinkedList: ");
        List<String> arrayListStrings = new ArrayList<String>();
        String[] arrayString_4 = {"Televisor", "Celular", "Mouse", "Tablet"};
        for (int i = 0; i < arrayString_4.length; i++) {
            arrayListStrings.add(arrayString_4[i]);
        }
        LinkedList<String> linkedListStrings = new LinkedList<String>(arrayListStrings);
        System.out.println("En el ArrayList: ");
        for (String item : arrayListStrings) {
            System.out.println(item);
        }
        System.out.println("En el LinkedList: ");
        for (String item : linkedListStrings) {
            System.out.println(item);
        }        
        System.out.println("--------------------------------");

        //Crea un ArrayList de tipo int, y, utilizando un bucle rellénalo con elementos 1..10. A continuación, con otro bucle, 
        //recórrelo y elimina los numeros pares. Por último, vuelve a recorrerlo y muestra el ArrayList final. Si te atreves, 
        //puedes hacerlo en menos pasos, siempre y cuando cumplas el primer "for" de relleno.

        System.out.println("--------------------------------");
        System.out.println("Ejercicio ArrayList de Enteros: ");
        ArrayList<Integer> arrayListInts = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            arrayListInts.add(i + 1);
        }
        System.out.println("Array de enteros completo: " + arrayListInts);
        for (int i = 0; i < arrayListInts.size(); i++) {
            if(arrayListInts.get(i) % 2 == 0){
                arrayListInts.remove(i);
            }
        }
        System.out.println("Array de enteros sin pares: " + arrayListInts);
        System.out.println("--------------------------------");

        //Crea una función DividePorCero. Esta, debe generar una excepción ("throws") a su llamante del tipo ArithmeticException 
        //que será capturada por su llamante (desde "main", por ejemplo). Si se dispara la excepción, 
        //mostraremos el mensaje "Esto no puede hacerse". Finalmente, mostraremos en cualquier caso: "Demo de código".

        System.out.println("--------------------------------");
        System.out.println("Ejercicio Divide por Cero: ");
        dividePorCero(2);
        System.out.println("--------------------------------");

        //Utilizando InputStream y PrintStream, crea una función que reciba dos parámetros: "fileIn" y "fileOut". 
        //La tarea de la función será realizar la copia del fichero dado en el parámetro "fileIn" al fichero dado en "fileOut".

        System.out.println("--------------------------------");
        System.out.println("Leer fichero a fichero: ");

        try {
            InputStream fileIn = new FileInputStream("archivos/prueba_input.txt");
            PrintStream fileOut = new PrintStream("archivos/destino.txt");
            copiaDeArchivos(fileIn, fileOut);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        System.out.println("--------------------------------");

        //Sorpréndenos creando un programa de tu elección que utilice InputStream, PrintStream, excepciones, un HashMap y un ArrayList, 
        //LinkedList o array.

        System.out.println("--------------------------------");
        System.out.println("Mini programa: ");

        String linea;
        String[] lineaLeida, datosUsuarios = null;
        InputStream in = new FileInputStream("archivos/lista_usuarios.txt");
        PrintStream out = new PrintStream("archivos/destino_lista_usuarios_hashmap.csv");
        BufferedReader lector = new BufferedReader(new InputStreamReader(in));
        Map<String, String> hashMap = new HashMap<String, String>();
        String nombre, email;
        try {            
            if(lector != null){
                while ((linea = lector.readLine()) != null) {
                    lineaLeida = linea.split(",");
                    for (int i = 0; i < lineaLeida.length; i++) {
                        datosUsuarios = lineaLeida[i].split(":");
                        nombre = datosUsuarios[0].trim();
                        email = datosUsuarios[1].trim();
                        hashMap.put(nombre, email);
                    }
                    System.out.println(hashMap);
                }
            }
            Iterator<Map.Entry<String, String>> iterator = hashMap.entrySet().iterator();
            ArrayList<String> listaUsuariosToCsv = new ArrayList<>();           
            while (iterator.hasNext()) {
                Map.Entry entry = iterator.next();
                listaUsuariosToCsv.add(entry.getKey() + " " +  entry.getValue());
            }
            for (int i = 0; i < listaUsuariosToCsv.size(); i++) {
                out.println(listaUsuariosToCsv.get(i));
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            lector.close();
            out.close();
        }

        System.out.println("--------------------------------");

    }

    public static void dividePorCero(int numero){
        int resultado;
        try {
            resultado = numero / 0;
            System.out.println("El resultado es: " + resultado);            
        } catch (ArithmeticException e) {
            System.out.println("Esto no puede hacerse.");
            System.out.println("Error Aritmético:" + e.getClass());
        } finally {
            System.out.println("Demo de código.");
        }
    }

    public static void copiaDeArchivos(InputStream fileIn, PrintStream fileOut){
        try {
            byte[] datos = fileIn.readAllBytes();
            fileOut.write(datos);
            System.out.println("Copia terminada.");
        } catch (Exception e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}
