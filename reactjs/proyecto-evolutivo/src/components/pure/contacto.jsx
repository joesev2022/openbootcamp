import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactoComponent = ({contacto}) => {
    return (
        <div>
            <h2>Contacto: {contacto.nombre + " " + contacto.apellido}</h2>
            <h3>Email: {contacto.email}</h3>
            <h3>Estado: {contacto.conectado ? 'En Linea':'Desconectado'}</h3>
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
