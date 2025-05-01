import "./style.css"
import IconeAgendar from "../../assets/icone-agendar.svg"
import {  useNavigate } from 'react-router-dom';


function infomacoesMedico({nomeMedico, clinicaMedica, ruaMedico, especialidade,avaliacaoMedico}){

    const navigate = useNavigate();
    return(
        <>
            
        
            <div className="info-medicos">
                <h4>Nome médico {nomeMedico}</h4>
        
                <p><strong>Clinica:</strong> {clinicaMedica}</p>
                <p><strong>Localização</strong> {ruaMedico}</p>
                <p><strong>Especialidade</strong> {especialidade}</p>
        
                <div className="info-medicos-button">
                    <p>Avaliação: {avaliacaoMedico}</p>
                    <button
                    onClick={()=>{
                        alert("Agendamento realizado!")
                        navigate('/inicio');
                    }}
                    >Agendar <span><img src={IconeAgendar} alt="Icone do agendamento" /></span></button>
                </div>
                    
        
        
            </div>
        </>
    )
}

export default infomacoesMedico;