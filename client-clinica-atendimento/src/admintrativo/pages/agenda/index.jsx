import "./style.css"
import HeaderAdministrativo from "../../components/header-administrativo"


function agenda(){
    return(
        <>
        <HeaderAdministrativo>
        <h2>Agenda</h2>

        <div className="input-date">
            <input type="date"/>
        </div>
        <br />

        <p>Segunda-Feira</p>

        <thead className="cabecalho-agenda">
            <th scope="col">Horário</th>
            <th scope="col">Dr. Marcos</th>
            <th scope="col">Dra. Paula</th>
            <th scope="col">Dra. Julia</th>
            <th scope="col">Dr. Carlos</th>
        </thead>
        <tbody className="copo-agenda">
            <tr >
                <td> 8h00</td>
                <td>Liberado</td>
                <td>Ocupado</td>
                <td>Ocupado</td>
                <td>Liberado</td>
            </tr>
            <tr >
                <td> 9h00</td>
                <td>Ocupado</td>
                <td>Ocupado</td>
                <td>Liberado</td>
                <td>Liberado</td>
            </tr>
            <tr >
                <td> 10h00</td>
                <td>Liberado</td>
                <td>Ocupado</td>
                <td>Ocupado</td>
                <td>Liberado</td>
            </tr>
            <tr >
                <td> 11h00</td>
                <td>Liberado</td>
                <td>Liberado</td>
                <td>Liberado</td>
                <td>Liberado</td>
            </tr>
            <tr >
                <td> 12h00</td>
                <td>Liberado</td>
                <td>Liberado</td>
                <td>Liberado</td>
                <td>Liberado</td>
            </tr>
            
        </tbody>
        </HeaderAdministrativo>
        
        </>
    )
}

export default agenda;