import React, { useState } from 'react';
import { Contacto } from '../../models/contacto.class';
import { ESTADO } from '../../models/estado.enum';
import ContactoComponent from '../pure/contacto';


const ContactoListComponent = () => {

    const contacto_1 = new Contacto('Miguel','Cervantes','mcervantes@gmail.com',ESTADO.CONECTADO);
    const contacto_2 = new Contacto('Samuel','Apaza','sapaza@gmail.com',ESTADO.DESCONECTADO);
    const contacto_3 = new Contacto('Roberto','Vadillo','rvadillo@gmail.com',ESTADO.CONECTADO);

    const [contactos, setContactos] = useState([contacto_1,contacto_2,contacto_3]);

    const changeStatus = (contacto) => {
        console.log('Change this contact:', contacto);
        const index = contactos.indexOf(contacto)
        const tempContactos = [...contactos]
        tempContactos[index].conectado = !tempContactos[index].conectado
        console.log('Estado cambiado:', tempContactos[index].conectado);
        setContactos(tempContactos)
    }

    const deleteContacto = (contacto) => {
        console.log('Delete this contact:', contacto);
        const index = contactos.indexOf(contacto)
        const tempContactos = [...contactos]
        tempContactos.splice(index, 1)
        console.log('Eliminación satisfactoria');
        setContactos(tempContactos)
    }

    return (
        <div className='container mt-4'>
            <div>
                <h2>Tus contactos:</h2>
            </div>
            <div>
            <table className="table">
                <thead>
                    <tr className='table-primary'>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Estado</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contactos.map((contacto, index) => {
                            return (
                                <ContactoComponent 
                                    key={index} 
                                    contacto={contacto} 
                                    changeStatus={changeStatus}
                                    deleteContact={deleteContacto}
                                ></ContactoComponent>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar un a lista */}
            {/* <ContactoComponent contacto={contacto_1}></ContactoComponent> */}
        </div>
    );
};


export default ContactoListComponent;
