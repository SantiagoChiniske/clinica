import "./style.css"
import { useNavigate} from "react-router-dom";

import HeaderAdministrativo from "../../components/header-administrativo"
import InputAcessAdministrativo from "../../components/input-acess-administrativo";
import BtnAcess from "../../components/btn-acess-administrativo";



function receitaDigital(){


    return(
        <>
        <HeaderAdministrativo>

        <h2>Receita Digital</h2>

        <InputAcessAdministrativo
        name={"Id do paciente"}
        tipo={"text"}
        placeholder={"Insira o ID"}
        />
        <InputAcessAdministrativo
        name={"Id do médico"}
        tipo={"text"}
        placeholder={"Insira o ID do Médico"}
        />

        <InputAcessAdministrativo
        name={"Remédio"}
        tipo={"text"}
        placeholder={"Insira o remédio"}
        />

        <InputAcessAdministrativo
        name={"Quantidade"}
        tipo={"text"}
        placeholder={"Insira a quantidade"}
        />

        <InputAcessAdministrativo
        name={"Mg"}
        tipo={"text"}
        placeholder={"Insira o mg"}
        />
    
        

    <BtnAcess
    text={"Gerar"}
    propiedade={"btn-acess-administrativo-cadastro"}
    />
        </HeaderAdministrativo>
        
        </>
    )
}

export default receitaDigital;