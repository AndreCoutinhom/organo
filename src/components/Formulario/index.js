import CampoTexto from '../CampoTexto';
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="o seu nome"/>
                <CampoTexto label="Cargo" placeholder="o seu cargo"/>
                <CampoTexto label="Imagem" placeholder="o seu endereço de imagem"/>

            </form>
        </section>
    )
}

export default Formulario;