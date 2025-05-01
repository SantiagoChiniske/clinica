import "./style.css"
import { useNavigate} from "react-router-dom";

import HeaderAdministrativo from "../../components/header-administrativo"
import InputAcessAdministrativo from "../../components/input-acess-administrativo";
import BtnAcess from "../../components/btn-acess-administrativo";



function relatorio(){


    return(
        <>
        <HeaderAdministrativo>

        <h2>Relatorio</h2>

        <InputAcessAdministrativo
        name={"Nome"}
        tipo={"text"}
        placeholder={"Insira o nome"}
        />
        <br />
        <p>Tipo de relátorio</p>
        <select className="section-cadastro" >
            <option defaultValue="Selecionar">Selecionar</option>
            <option value="Finaceiro">Finaceiro</option>
            <option value="Hospitalar">Hospitalar</option>
            <option value="Medicos">Medicos</option>
            <option value="Suprimentos">Suprimentos</option>
        </select>

        <br />
        <p>Data:</p>
        <div className="input-date">
            <input type="date" />
            <span>Até</span>
            <input type="date" />
        </div>
        

    <BtnAcess
    text={"Gerar"}
    propiedade={"btn-acess-administrativo-cadastro"}
    />
        </HeaderAdministrativo>
        
        </>
    )
}

export default relatorio;