package service;

import java.util.ArrayList;
import java.util.List;

import entities.Coche;

public class CocheCRUDImpl implements CocheCRUD{

    List<Coche> coches = new ArrayList<>();

    @Override
    public void save(Coche coche) {
        coches.add(coche);
        
    }

    @Override
    public List<Coche> findAll() {
        return coches;
    }

    @Override
    public void delete(Coche coche) {
        coches.remove(coche);
    }
    
}
