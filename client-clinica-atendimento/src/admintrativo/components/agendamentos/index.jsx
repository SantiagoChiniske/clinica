import "./style.css"

 function agendamentosAdministrativo({data,horario, medico, modelo}){
    return(
        <div className="hisoricos-administrativo">
            <div className="info-agendamentos">
                <p><strong>Data</strong>{data}  - {horario}</p>      
                <p><strong>Médico:</strong> {medico} </p>
                <p><strong>Modelo</strong> {modelo}</p>
            </div>
            <hr className="divisor-principal"></hr>
        </div>
    )
 }

 export default agendamentosAdministrativo
