import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';


const ContactoListComponent = () => {

    const defaultContacto = new Contacto('Miguel','Cervantes','mcervantes@gmail.com',true);

    return (
        <div>
            <div>Tus contactos:</div>
            {/* TODO: Aplicar un For/Map para renderizar un a lista */}
            <ContactoComponent contacto={defaultContacto}></ContactoComponent>
        </div>
    );
};


export default ContactoListComponent;
