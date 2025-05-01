import LogoPequena from "../../assets/Logo-pequena.svg"
import ImgArrow from "../../assets/arrow.svg"

import  {Link} from "react-router-dom"
import {  useNavigate } from 'react-router-dom';

import "./style.css"

function headerAdministrativo ({children}){
    const navigate = useNavigate();
    return(

        <>
        <header className="header-nav">
                <div className="header-nav-horizontal-administrativo">
                   
                    <nav>

                        <Link to={"/administrativo/inicio"}><h2>VidaPlus</h2></Link>
                        
                    </nav>
                    <img src={LogoPequena} alt="Logo" />
                </div>
               
    
        </header>   
        <div className="header-nav-vertical-administrativo">

            

            <nav>
                    <h3>Acessos</h3>
                    <Link to={"/administrativo/cadastro"}>Cadastro<img src={ImgArrow}  alt="Seta" /></Link>
                    <Link to={"/administrativo/leitos"}>Leitos<img src={ImgArrow}  alt="Seta" /></Link>
                    <Link to={"/administrativo/agenda"}>Agenda<img src={ImgArrow}  alt="Seta" /></Link>
                    <Link to={"/administrativo/relatorio"}>Relatório<img src={ImgArrow}  alt="Seta" /></Link>
                    <Link to={"/administrativo/prontuario"}>Prontuário<img src={ImgArrow}  alt="Seta" /></Link>
                    <Link to={"/administrativo/suprimentos"}>Suprimento<img src={ImgArrow}  alt="Seta" /></Link>
                    <Link to={"/administrativo/receita-digital"}>Receita digital<img src={ImgArrow}  alt="Seta" /></Link>
                    <Link to={"/administrativo/historicos"}>Histórico<img src={ImgArrow}  alt="Seta" /></Link>
                    
                    
                    <button className="nav-button-admin" onClick={() => {
                        alert("Você está saindo...")
                        navigate('/administrativo');

                        }}>Sair</button>
            </nav>
            <div className="section-conteudo">
                {children}
            </div>
            
           
        </div>
        </>
    )
}
export default headerAdministrativo;