import { useState } from 'react';
import Botao from '../Botao/Botao';
import ListaSuspensa from '../ListaSuspensa';
import Form from '../campoTexto/campoTexto';
import './formulario.css';

const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });
    }

    return (
        <section className="sectionFormulario">
            <form onSubmit={aoSalvar}>
                <Form 
                    label="Nome" 
                    validacao={true} 
                    placeholder="Digite seu nome"
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)}
                />

                <Form 
                    label="Cargo" 
                    validacao={true} 
                    placeholder="Digite seu cargo" 
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)}
                />

                <Form 
                    label="Imagem" 
                    placeholder="Digite o intereço da imagem" 
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    label="Times" 
                    validacao={true} 
                    itens={times} 
                    valor={time} 
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;