import "./style.css"
import HeaderAdministrativo from "../../components/header-administrativo";
import InputEntrada from "../../components/input-acess-administrativo";
import BtnAcess from "../../components/btn-acess-administrativo";


function adicionarSuprimentos(){
    return(
        <>
         <HeaderAdministrativo>
        <h2>Adicionar suprimentos</h2>

        <section className="forms-adicionar-suprimentos">
            <InputEntrada 
            name={"ID:"}
            placeholder={"Insira o ID"}
            />
            <InputEntrada 
            name={"Medicamento:"}
            placeholder={"Insira o medicamentos"}
            />
        </section>
        <section className="forms-adicionar-suprimentos">
            <InputEntrada 
            name={"Quantidade:"}
            placeholder={"Insira a quantidade"}
            />
            <InputEntrada 
            name={"Responsável"}
            placeholder={"Insira o responsável"}
            />
        </section>
        <InputEntrada 
            name={"Observação:"}
            placeholder={"Insira a observação"}
            tipo={"text"}
            />

            <BtnAcess
            text={"Adicionar"}
            propiedade={"btn-acess-administrativo-cadastro"}
            />

        </HeaderAdministrativo>
        </>
    )
}

export default adicionarSuprimentos;