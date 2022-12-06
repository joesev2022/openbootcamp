import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ESTADO } from '../../../models/estado.enum';
import { Contacto } from '../../../models/contacto.class';

const ContactoForm = ( {add} ) => {

    const nombreRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');
    const estadoRef = useRef(ESTADO.CONECTADO);

    const addContacto = (e) => {
        e.preventDefault();
        const nuevoContacto = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            estadoRef.current.value,
        )
        console.log('Estado del nuevo contacto: ', nuevoContacto.conectado);
        add(nuevoContacto)
    }

    return (
        <div className="card bg-secondary mb-3">
            <div className="card-header">
                Formulario de contacto
            </div>
            <div className="card-body">
                <form onSubmit={addContacto} className="p-2">
                    <div className="form-group row">
                        <label htmlFor="staticNombre" className="col-sm-2 col-form-label">Nombre</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" id="staticNombre" ref={nombreRef}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticApellido" className="col-sm-2 col-form-label">Apellido</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" id="staticApellido" ref={apellidoRef}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" id="staticEmail" ref={emailRef}/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="selectEstado" className="col-sm-2 col-form-label">Estado</label>
                        <select ref={estadoRef} defaultValue={ESTADO.CONECTADO} className="form-select col-sm-10" id="selectEstado">
                            <option value={ESTADO.CONECTADO}>Conectado</option>
                            <option value={ESTADO.DESCONECTADO}>Desconectado</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success">Registrar</button>
                </form>
            </div>
        </div>
    );
}

ContactoForm.prototype = {
    add: PropTypes.func.isRequired
}

export default ContactoForm;
