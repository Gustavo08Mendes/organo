import './ListaSuspensa.css';

const ListaSuspensa = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className='ListaSuspensa'>
            <label>{props.label}</label>
            <select                
                required={props.validacao}
                value={props.valor}
                onChange={evento => props.aoAlterado(evento.target.value)}>

                {props.itens.map(item => {
                    return <option key={item}>{item}</option>}) 
                }

            </select>
        </div>
    )
    
}

export default ListaSuspensa;

