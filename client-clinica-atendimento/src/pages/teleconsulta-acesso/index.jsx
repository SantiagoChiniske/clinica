import "./style.css"
import HeaderPaciente from "../../components/header-paciente"
import ImgCamera from "../../assets/icone-camera.svg"
import ImgMic from "../../assets/icone-mic.svg"
import ImgHeadset from "../../assets/icone-headset.svg"

function teleconsultaAcesso(){
    return(
        <>
        <HeaderPaciente>
        <h2>Teleconsulta</h2>

        <section className="teleconsulta-webcam">

        <div className="teleconsulta-webacam-medico">

            <div className="webcam-medico-button">
                <button><img src={ImgCamera} alt="Icone de Câmera" /></button>
                <button><img src={ImgMic} alt="Icone de Microfone" /></button>
                <button><img src={ImgHeadset} alt="Icone de Câmera" /></button>
            </div>
            <p>Dr. Marcos Guilherme</p>
        </div>


        <div className="teleconsulta-web-cam-paciente">
            <p>Nome paciente</p>
        </div>

        </section>
        

        </HeaderPaciente>
    
        </>
    )
}

export default teleconsultaAcesso;