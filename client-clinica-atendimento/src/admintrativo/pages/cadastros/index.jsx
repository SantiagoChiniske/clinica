import "./style.css"
import { useNavigate} from "react-router-dom";

import HeaderAdministrativo from "../../components/header-administrativo"
import InputAcessAdministrativo from "../../components/input-acess-administrativo";
import BtnAcess from "../../components/btn-acess-administrativo";



function cadastros(){


    return(
        <>
        <HeaderAdministrativo>

        <h2>Cadastro</h2>

        <InputAcessAdministrativo
        name={"Nome"}
        tipo={"text"}
        placeholder={"Insira o nome"}
        />
        <InputAcessAdministrativo
        name={"Telefone:"}
        tipo={"text"}
        placeholder={"Insira o telefone"}
        />
        <InputAcessAdministrativo
        name={"Documento"}
        tipo={"text"}
        placeholder={"Insira o documento"}
        />
        <InputAcessAdministrativo
        name={"Endereço"}
        tipo={"text"}
        placeholder={"Insira o endereço"}
        />
        <InputAcessAdministrativo
        name={"E-mail"}
        tipo={"email"}
        placeholder={"Insira o e-mail"}
        /><InputAcessAdministrativo
        name={"Senha:"}
        tipo={"password"}
        placeholder={"Insira a senha:"}
        />

        <select className="section-cadastro" >
            <option defaultValue="Selecionar">Selecionar</option>
            <option value="">administrador</option>
            <option value="">Paciente</option>
            <option value="">Medicos</option>
            <option value="">Recepcionista</option>
        </select>

    <BtnAcess
    text={"Cadastrar"}
    propiedade={"btn-acess-administrativo-cadastro"}
    />
        </HeaderAdministrativo>
        
        </>
    )
}

export default cadastros;