import {useState} from 'react';
import './campoTexto.css';

const Form = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campoTexto">
            <label>{props.label}</label>
            <input
                placeholder={props.placeholder}
                required={props.validacao}
                value={props.valor}
                onChange={aoDigitar}
            />
        </div>
    )
}

export default Form;