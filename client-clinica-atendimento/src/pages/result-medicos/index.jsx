import "./style.css"
import HeaderPaciente from "../../components/header-paciente/index"
import InformacoesMedico from "../../components/informacoes-medico/index.jsx"
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/medicos";

function resultMedicos (){
    
    const [medicos, setMedicos] = useState([]);
    const [nome, setNome] = useState("");

    useEffect(() => {
        buscarUsuarios();
      }, []);
    
      const buscarUsuarios = () => {
        axios.get(API_URL)
          .then(res => setMedicos(res.data))
          .catch(err => console.error("Erro ao carregar usuários", err));
      };

    return(
        <HeaderPaciente>
            <h2>Médicos encontrados:</h2>
            {medicos.filter( medico => medico.especialidade =="Clinico Geral").map(medico =>(
           
                < InformacoesMedico
                nomeMedico={medico.nomeCompleto}
                clinicaMedica={medico.clinica}
                ruaMedico={medico.localizacao}
                especialidade={medico.especialidade}
                avaliacaoMedico={medico.avaliacao}
                />
            
            
        ))}
        </HeaderPaciente>
    )
}

export default resultMedicos;