package service;

import java.util.List;

import entities.Coche;

public interface CocheCRUD {
    
    void save(Coche coche);

    List<Coche> findAll();

    void delete(Coche coche);

}
