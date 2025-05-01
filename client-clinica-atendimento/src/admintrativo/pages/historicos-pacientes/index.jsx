import "./style.css"
import { useNavigate} from "react-router-dom";

import HeaderAdministrativo from "../../components/header-administrativo"
import InputAcessAdministrativo from "../../components/input-acess-administrativo";
import BtnAcess from "../../components/btn-acess-administrativo";
import Agendamentos from "../../components/agendamentos";


function historicosPacientes(){


    return(
        <>
        <HeaderAdministrativo>

        <h2>Historicos do pacientes</h2>


        <div className="historicos-pacientes">
            <div>
                <InputAcessAdministrativo
                name={"Id do paciente"}
                tipo={"text"}
                placeholder={"Insira o ID"}
                />
            </div>
            
            <div>
            <InputAcessAdministrativo
            name={"Nome"}
            tipo={"text"}
            placeholder={"Insira o nome"}
            />
            </div>
            <BtnAcess
            text={"Buscar"}
            propiedade={"btn-acess-administrativo-cadastro"}
            />
        </div>
        
        <Agendamentos
        data={"15-08-2033"}
        horario={"15h00"}
        medico={"Santiago"}
        modelo={"Presencial"}
        />
        <Agendamentos
        data={"15-08-2033"}
        horario={"15h00"}
        medico={"Santiago"}
        modelo={"Presencial"}
        />

<Agendamentos
        data={"15-08-2033"}
        horario={"15h00"}
        medico={"Santiago"}
        modelo={"Presencial"}
        />




    
        </HeaderAdministrativo>
        
        </>
    )
}

export default historicosPacientes;