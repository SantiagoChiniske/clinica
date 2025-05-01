import "./style.css"
import { useNavigate} from "react-router-dom";

import HeaderAdministrativo from "../../components/header-administrativo"
import InputAcessAdministrativo from "../../components/input-acess-administrativo";
import BtnAcess from "../../components/btn-acess-administrativo";



function prontuario(){


    return(
        <>
        <HeaderAdministrativo>

        <h2>Prontuário</h2>

        <InputAcessAdministrativo
        name={"Nome do paciente"}
        tipo={"text"}
        placeholder={"Insira o nome do paciente"}
        />
        <InputAcessAdministrativo
        name={"Anamnse"}
        tipo={"text"}
        placeholder={"Insira o anamnese"}
        />

        <InputAcessAdministrativo
        name={"Exame  físico"}
        tipo={"text"}
        placeholder={"Insira o exame físico"}
        />

        <InputAcessAdministrativo
        name={"hipóteses diagnósticos"}
        tipo={"text"}
        placeholder={"Insira a hispótese"}
        />

        <InputAcessAdministrativo
        name={"Tratamento"}
        tipo={"text"}
        placeholder={"Insira o tratamento"}
        />
    
        

    <BtnAcess
    text={"Gerar"}
    propiedade={"btn-acess-administrativo-cadastro"}
    />
        </HeaderAdministrativo>
        
        </>
    )
}

export default prontuario;