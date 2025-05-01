import "./style.css"
import BtnFuncao from "../../components/btn-acess/index"

 function agendamentos({data,horario, medico, modelo,propriedade1, propriedade2}){
    return(
        <div className="agendamentos">
            <div className="info-agendamentos">
                <p><strong>Data</strong>{data}  - {horario}</p>      
                <p><strong>Médico:</strong> {medico} </p>
                <p><strong>Modelo</strong> {modelo}</p>
            </div>
            <div className="agendamento-btn">

            <BtnFuncao
            text={"Teleconsulta"}
            propiedade={propriedade1}
            
            />
            <BtnFuncao
            text={"Cancelar"}
            propiedade={propriedade2}
            />

            </div>
            
            <hr className="divisor-principal"></hr>
        </div>
    )
 }

 export default agendamentos
