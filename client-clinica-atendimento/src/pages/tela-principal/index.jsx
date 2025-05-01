import "./style.css"
import HeaderPaciente from "../../components/header-paciente"
import ImgCarrosel from "../../assets/image.svg"
import Agendamentos from "../../components/agendamentos"
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/consultas";

function telaPrincipal () {
const [consulta, setConsulta] = useState([]);
useEffect(() => {
    buscarUsuarios();
  }, []);

  const buscarUsuarios = () => {
    axios.get(API_URL)
      .then(res => setConsulta(res.data))
      .catch(err => console.error("Erro ao carregar usuários", err));
  };


    
    return(
        <HeaderPaciente>

         <section className="section-conteudo">
             <h2>Olá, Seja bem vindo<strong> </strong> 👋</h2>
            

                

                <div className="info-carrosel">
                    <img src={ImgCarrosel} alt="teste" />
                </div>

                <div className="Info-agendamentos">

                    <h2>Seus agendamentos</h2>   
                    {consulta.filter(consulta => consulta.paciente === "Santiago Chiniske Pereira" && consulta.modelo === "Teleconsulta").map(consulta =>(
                        <Agendamentos
                        data={consulta.data}
                        horario={consulta.horario}
                        medico={consulta.nomeMedico}
                        modelo={consulta.modelo}
                        propriedade1={"btn-acess"}
                        propriedade2={"btn-acess"}
                        />
                   
                    ))}
                     {consulta.filter(consulta => consulta.paciente === "Santiago Chiniske Pereira" && consulta.modelo === "Presencial").map(consulta =>(
                        <Agendamentos
                        data={consulta.data}
                        horario={consulta.horario}
                        medico={consulta.nomeMedico}
                        modelo={consulta.modelo}
                        propriedade1={"btn-acess-sumir"}
                        propriedade2={"btn-acess"}
                        />
                   
                    ))}

                   
                </div>

        
            </section>
        </HeaderPaciente>
        
    )
}

export default telaPrincipal;