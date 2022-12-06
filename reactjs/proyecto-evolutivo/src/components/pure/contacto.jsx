import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactoComponent = ({contacto, changeStatus, deleteContact}) => {
    return (
        <tr>
            <td>{contacto.nombre}</td>
            <td>{contacto.apellido}</td>
            <td>{contacto.email}</td>
            <td>
                { !contacto.conectado ?
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={() => changeStatus(contacto)}/>
                        <label className="form-check-label">Desconectado</label>
                    </div> :
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" defaultChecked={true} onClick={() => changeStatus(contacto)}/>
                        <label className="form-check-label">Conectado</label>
                    </div>
                    
                }
                
            </td>
            <td><button className="btn btn-danger" onClick={() => deleteContact(contacto)}>Eliminar</button></td>
        </tr>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    changeStatus: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired
};


export default ContactoComponent;
