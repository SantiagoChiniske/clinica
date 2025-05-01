import "./style.css"

import { Link } from "react-router-dom";
import HeaderAdministrativo from "../../components/header-administrativo"
import ImgAdicionar from "../../assets/mais.svg"
import QuantidadeSuprimentos from "../../components/quantidade-suprimentos";


function suprimentos(){
    return(
        <>
        <HeaderAdministrativo>

            <div className="suprimentos-adicionar">
                <h2>Suprimentos</h2>

                <Link to={"/administrativo/suprimentos/adicionar"}>Adicionar <img src={ImgAdicionar} alt="adicionar" className="img-adicionar" /></Link>
            </div>
            

            <section className="lista-de-medicamento">
            <QuantidadeSuprimentos
            nomeMedicamento={"Medicamento1"}
            quantidadeMg={"20mg"}
            quantidade={"100"}
            />

            <QuantidadeSuprimentos
            nomeMedicamento={"medicamento02"}
            quantidadeMg={"10mg"}
            quantidade={"100"}
            />

            <QuantidadeSuprimentos
            nomeMedicamento={"medicamento03"}
            quantidadeMg={"30mg"}
            quantidade={"100"}
            />

            <QuantidadeSuprimentos
            nomeMedicamento={"medicamento04"}
            quantidadeMg={"20mg"}
            quantidade={"100"}
            />

            <QuantidadeSuprimentos
            nomeMedicamento={"medicamento05"}
            quantidadeMg={"20mg"}
            quantidade={"100"}
            />

            </section>
           
            <section className="lista-de-medicamento">
            <QuantidadeSuprimentos
            nomeMedicamento={"Medicamento1"}
            quantidadeMg={"20mg"}
            quantidade={"100"}
            />

            <QuantidadeSuprimentos
            nomeMedicamento={"medicamento02"}
            quantidadeMg={"10mg"}
            quantidade={"100"}
            />

            <QuantidadeSuprimentos
            nomeMedicamento={"medicamento03"}
            quantidadeMg={"30mg"}
            quantidade={"100"}
            />

            <QuantidadeSuprimentos
            nomeMedicamento={"medicamento04"}
            quantidadeMg={"20mg"}
            quantidade={"100"}
            />

            <QuantidadeSuprimentos
            nomeMedicamento={"medicamento05"}
            quantidadeMg={"20mg"}
            quantidade={"100"}
            />

            </section>

            <section className="lista-de-medicamento">
            <QuantidadeSuprimentos
            nomeMedicamento={"Medicamento1"}
            quantidadeMg={"20mg"}
            quantidade={"100"}
            />

            <QuantidadeSuprimentos
            nomeMedicamento={"medicamento02"}
            quantidadeMg={"10mg"}
            quantidade={"100"}
            />

            <QuantidadeSuprimentos
            nomeMedicamento={"medicamento03"}
            quantidadeMg={"30mg"}
            quantidade={"100"}
            />

            <QuantidadeSuprimentos
            nomeMedicamento={"medicamento04"}
            quantidadeMg={"20mg"}
            quantidade={"100"}
            />

            <QuantidadeSuprimentos
            nomeMedicamento={"medicamento05"}
            quantidadeMg={"20mg"}
            quantidade={"100"}
            />

            </section>

            <section className="lista-de-medicamento">
            <QuantidadeSuprimentos
            nomeMedicamento={"Medicamento1"}
            quantidadeMg={"20mg"}
            quantidade={"100"}
            />

            <QuantidadeSuprimentos
            nomeMedicamento={"medicamento02"}
            quantidadeMg={"10mg"}
            quantidade={"100"}
            />

            <QuantidadeSuprimentos
            nomeMedicamento={"medicamento03"}
            quantidadeMg={"30mg"}
            quantidade={"100"}
            />

            <QuantidadeSuprimentos
            nomeMedicamento={"medicamento04"}
            quantidadeMg={"20mg"}
            quantidade={"100"}
            />

            <QuantidadeSuprimentos
            nomeMedicamento={"medicamento05"}
            quantidadeMg={"20mg"}
            quantidade={"100"}
            />

            </section>
   
            


        </HeaderAdministrativo>
        </>
    )
}

export default suprimentos;