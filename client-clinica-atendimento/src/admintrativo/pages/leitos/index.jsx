import HeaderAdministrativo from "../../components/header-administrativo";
import LeitosDisponibilidade from "../../components/leitos-disponibilidade/index";
import { Link } from "react-router-dom";
import ImgAdicionar from "../../assets/mais.svg"
import ImgInfo from "../../assets/info.svg"
import "./style.css"

function leitos (){
    return(
        <>
        <HeaderAdministrativo>
        <div className="suprimentos-adicionar">
                <h2>Leitos disponível</h2>

                <Link to={"/administrativo"}>Adicionar <img src={ImgAdicionar} alt="adicionar" className="img-adicionar" /></Link>
            </div>


            <div className="leitos-blocos">
            <h3 className="titulos-blocos-leitos">Bloco 1</h3>

            <section className="secao-leitos">
            <LeitosDisponibilidade
            numeroCama={"Cama 1"}
            styleDisponibilidade={"bloco-disponibilidade-indisponivel"}
            statusDisponibilidade={"Indisponivel"}
            />
            <LeitosDisponibilidade
            numeroCama={"Cama 2"}
            styleDisponibilidade={"bloco-disponibilidade-disponivel"}
            statusDisponibilidade={"Disponível"}
            />
            <LeitosDisponibilidade
            numeroCama={"Cama 3"}
            styleDisponibilidade={"bloco-disponibilidade-disponivel"}
            statusDisponibilidade={"Disponível"}
            />
            <LeitosDisponibilidade
            numeroCama={"Cama 4"}
            styleDisponibilidade={"bloco-disponibilidade-disponivel"}
            statusDisponibilidade={"Disponível"}
            />
            <LeitosDisponibilidade
            numeroCama={"Cama 5"}
            styleDisponibilidade={"bloco-disponibilidade-disponivel"}
            statusDisponibilidade={"Disponível"}
            />
            </section>

            <h3 className="titulos-blocos-leitos">Bloco 2</h3>

            <section className="secao-leitos">
            <LeitosDisponibilidade
            numeroCama={"Cama 1"}
            styleDisponibilidade={"bloco-disponibilidade-indisponivel"}
            statusDisponibilidade={"Indisponivel"}
            />
            <LeitosDisponibilidade
            numeroCama={"Cama 2"}
            styleDisponibilidade={"bloco-disponibilidade-disponivel"}
            statusDisponibilidade={"Disponível"}
            />
            <LeitosDisponibilidade
            numeroCama={"Cama 3"}
            styleDisponibilidade={"bloco-disponibilidade-disponivel"}
            statusDisponibilidade={"Disponível"}
            />
            <LeitosDisponibilidade
            numeroCama={"Cama 4"}
            styleDisponibilidade={"bloco-disponibilidade-disponivel"}
            statusDisponibilidade={"Disponível"}
            />
            <LeitosDisponibilidade
            numeroCama={"Cama 5"}
            styleDisponibilidade={"bloco-disponibilidade-disponivel"}
            statusDisponibilidade={"Disponível"}
            />
            </section>

            <h3 className="titulos-blocos-leitos">Bloco 3</h3>

            <section className="secao-leitos">
            <LeitosDisponibilidade
            numeroCama={"Cama 1"}
            styleDisponibilidade={"bloco-disponibilidade-indisponivel"}
            statusDisponibilidade={"Indisponivel"}
            />
            <LeitosDisponibilidade
            numeroCama={"Cama 2"}
            styleDisponibilidade={"bloco-disponibilidade-disponivel"}
            statusDisponibilidade={"Disponível"}
            />
            <LeitosDisponibilidade
            numeroCama={"Cama 3"}
            styleDisponibilidade={"bloco-disponibilidade-disponivel"}
            statusDisponibilidade={"Disponível"}
            />
            <LeitosDisponibilidade
            numeroCama={"Cama 4"}
            styleDisponibilidade={"bloco-disponibilidade-disponivel"}
            statusDisponibilidade={"Disponível"}
            />
            <LeitosDisponibilidade
            numeroCama={"Cama 5"}
            styleDisponibilidade={"bloco-disponibilidade-disponivel"}
            statusDisponibilidade={"Disponível"}
            />
            </section>


            <br />
            <br />

            </div>

        </HeaderAdministrativo>
        </>
    )
}

export default leitos;