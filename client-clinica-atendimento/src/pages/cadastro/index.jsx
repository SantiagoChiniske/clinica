import "./style.css"
import imgLogo from "../../assets/Logo.svg"
import InputAcesso from "../../components/input-acess/index"
import BtnAcess from "../../components/btn-acess"


function cadastro (){
    return(
        <form className="container-cadastro-centralizado">
        <div className="container-cadastro">

        <div className="cadastro-form">
            <h3>Cadastro</h3>



            <div className="cadastro-input">

            <InputAcesso
            name={"Nome completo"}
            placeholder={"Insira seu nome"}
            tipo={"text"}
            />

            <InputAcesso
            name={"Senha"}
            placeholder={"Insira sua senha"}
            tipo={"password"}
            />
            <InputAcesso
            name={"Repita sua senha"}
            placeholder={"Insira a senha novamente"}
            tipo={"password"}
            />

            <InputAcesso
            name={"Documento"}
            placeholder={"Insira seu CPF"}
            tipo={"text"}
            />
            <InputAcesso
            name={"Telefone"}
            placeholder={"Insira seu telefone"}
            tipo={"tel"}
            />
            </div>

            <div className="cadastro-btn">
               <BtnAcess text ={"Cadastrar"}
               
               propiedade={"btn-acess"}/>
            </div>
            
        </div>

        <div className="cadastro-img">
            <img src={imgLogo} alt="Logo " />
        </div>
            
        </div>

    </form>
    )
}

export default cadastro;