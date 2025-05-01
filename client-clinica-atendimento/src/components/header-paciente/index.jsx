import LogoPequena from "../../assets/Logo-pequena.svg"
import IconeTeleConsulta from "../../assets/icone-teleconsulta.svg"
import IconeConsulta from "../../assets/icone-consulta.svg"
import IconeExame from "../../assets/icone-exame.svg"
import  {Link} from "react-router-dom"
import {  useNavigate } from 'react-router-dom';

import "./style.css"

function headerPaciente ({children}){
    const navigate = useNavigate();
    return(

        <>
        <header className="header-nav">
                <div className="header-nav-horizontal">
                   
                    <nav>

                        <Link to={"/inicio"}><h2>VidaPlus</h2></Link>
                        <Link to={"/inicio/perfil"}>Perfil</Link>
                        <Link to={"/teleconsulta-acesso"}>Acesso Teleconsulta</Link>
                        
                    </nav>
                    <img src={LogoPequena} alt="Logo" />
                </div>
               
    
        </header>   
        <div className="header-nav-vertical">

            

            <nav>
                    <h3>Serviços</h3>
                    <Link to={"/inicio/consulta-online"}>Teleconsulta<img src={IconeTeleConsulta} alt="Simbolo de computador" /></Link>
                    <Link to={"/inicio/consulta-presencial"}>Consulta<img src={IconeConsulta} alt="Simbolo de pessoa" /></Link>
                    <Link to={"/inicio/exame"}>Exame<img src={IconeExame} alt="Simbolo de papel" /></Link>
                    <button className="nav-button" onClick={() => {
                        navigate('/');
                        }}>Sair</button>
            </nav>
            <div className="section-conteudo">
                {children}
            </div>
            
           
        </div>
        </>
    )
}
export default headerPaciente;