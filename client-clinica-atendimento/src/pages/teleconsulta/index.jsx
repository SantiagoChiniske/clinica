import "./style.css"
import HeaderPaciente from "../../components/header-paciente/index"
import BtnAcess from "../../components/btn-acess/index"
import { Link } from "react-router-dom"

function teleConsulta(){
    var nome = "Santiago"
    var email = "santiago@gmail.com"
    var telefone = "(41)99999-9999"

    return(
        <>
        <HeaderPaciente>

            <section className="section-consulta">
            <h2>Consulta On-line</h2>

            <h3>Informações de contato</h3>

            <div className="section-consulta-info">
                <p><strong>Nome:</strong>{nome}</p> 
                <p><strong>E-mail:</strong>{email}</p>
                <p><strong>Telefone:</strong>{telefone}</p>
            </div>

            <h3>Selecione seu especialista</h3>
            <select className="section-consulta-option" >
                <option defaultValue="" disabled >Especialista</option>
                <option value="">Clinico Geral</option>
                <option value="">Psicologo</option>
                <option value="">Ginecologista</option>
            </select>

            <Link to={"/resultado-medicos"}>
                <BtnAcess
                text={"Próximo"}
                propiedade={"btn-acess"}
                />
            </Link>


            </section>

        

        </HeaderPaciente>
            
        </>
    )
}

export default teleConsulta;