import "./style.css"
import HeaderPaciente from "../../components/header-paciente/index"
import BtnAcess from "../../components/btn-acess/index"
import Localizador from "../../components/localizador/index"
import { Link } from "react-router-dom"

function consultaPresencial(){
    var nome = "Santiago"
    var email = "santiago@gmail.com"
    var telefone = "(41)99999-9999"

    return(
        <>
        <HeaderPaciente>

            <section className="section-consulta">
            <h2>Agendamento de Exame</h2>

            <p className="section-consulta-paragrafo">Selecione a sua localização:</p>

            <Localizador></Localizador>

            <h3>Informações de contato</h3>

            <div className="section-consulta-info">
                <p><strong>Nome:</strong>{nome}</p> 
                <p><strong>E-mail:</strong>{email}</p>
                <p><strong>Telefone:</strong>{telefone}</p>
            </div>

            <h3>Selecione seu especialista</h3>
            <select className="section-consulta-option" >
                <option defaultValue="" disabled >Exames</option>
                <option value="">Exame de sangue</option>
                <option value="">Psiquiatra</option>
                <option value="">Hemograma completo </option>
                <option value="">Ultrassonografia abdominal  </option>

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

export default consultaPresencial;