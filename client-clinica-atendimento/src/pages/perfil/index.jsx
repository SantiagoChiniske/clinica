import "./style.css"
import HeaderPaciente from "../../components/header-paciente/index"
import Agendamentos from  "../../components/agendamentos/index"
import FotoPerfil from "../../assets/foto-perfil.svg"
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/usuarios";
const API_URL_historicos = "http://localhost:3001/historicos";

function perfil (){

    const [usuarios, setUsuarios] = useState([]);
    const [historicos, setHistoricos] = useState([]);
    
useEffect(() => {
    buscarUsuarios();
    buscarHistoricos();
  }, []);

  const buscarUsuarios = () => {
    axios.get(API_URL)
      .then(res => setUsuarios(res.data))
      .catch(err => console.error("Erro ao carregar usuários", err));
  };

  const buscarHistoricos = () => {
    axios.get(API_URL_historicos)
      .then(res => setHistoricos(res.data))
      .catch(err => console.error("Erro ao carregar usuários", err));
  };
    return(
        <>
        <HeaderPaciente>

           

        <section className="section-perfil">
        
       
            

            <div className=" section-perfil-info">
            <div className="perfil-info-text">
            {usuarios.filter(usuarios => usuarios.nomeCompleto ==="Santiago Chiniske Pereira").map( usuarios =>(
                
                <>

                <img src={usuarios.url_img} alt="Imagem de perfil" />
                <p>{usuarios.nomeCompleto}</p>

                <h2>Informações</h2>
                <p><strong>CPF: </strong>{usuarios.cpf}</p>
                <p><strong>Telefone: </strong>{usuarios.telefone}</p>
                <p><strong>email: </strong>{usuarios.email}</p>
                </>
                
            ))}


                


                
            </div>
        </div>

        <div className="perfil-doencas">
            

            <h2>Doenças </h2>

            

            <div className="carrosel-doenças">

            {usuarios.filter(usuarios => usuarios.nomeCompleto ==="Santiago Chiniske Pereira").map(usuarios =>(
                <>
             
                 <span className="perfil-doencas-span">{usuarios.doenca[0]}</span>
                 <span className="perfil-doencas-span">{usuarios.doenca[1]}</span>
                </>
               
            ))}
            
                
            </div>
            

        </div>

        <div className="perfil-historicas">

        <h2>Históricos </h2>
        {historicos.filter(historicos => historicos.paciente === "Santiago Chiniske Pereira" && historicos.modelo === "Teleconsulta").map(historicos =>(
                        <Agendamentos
                        data={historicos.data}
                        horario={historicos.horario}
                        medico={historicos.nomeMedico}
                        modelo={historicos.modelo}
                        propriedade1={"btn-acess"}
                        propriedade2={"btn-acess"}
                        />
                   
                    ))}

        {historicos.filter(historicos => historicos.paciente === "Santiago Chiniske Pereira" && historicos.modelo === "Presencial").map(historicos =>(
                        <Agendamentos
                        data={historicos.data}
                        horario={historicos.horario}
                        medico={historicos.nomeMedico}
                        modelo={historicos.modelo}
                        propriedade1={"btn-acess-sumir"}
                        propriedade2={"btn-acess"}
                        />
                   
                    ))}
        

        </div>
        
        </section>



        </HeaderPaciente>
        </>
    )
}


export  default perfil;