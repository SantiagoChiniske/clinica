import "./style.css"
import InputAcesso from "../../components/input-acess-administrativo/index"
import BtnAcess from "../../components/btn-acess-administrativo"
import ImgLogo from "../../assets/Logo.svg"

import  {Link,  useNavigate} from "react-router-dom"
import { useState } from 'react';

function login() {

  const [usuario, setUsuario] = useState('');
  const [senha,setSenha] = useState('');
  const [erro,setErro] = useState(null);
  const navigate = useNavigate();

  const fazerLogin = async () => {
    try {
      const resposta = await fetch(`http://localhost:3001/administrativo?usuario=${usuario}&senha=${senha}`);
      const dados = await resposta.json();

      if (!usuario.trim() || !senha.trim()) {
        alert('Preencha o Usuário e a Senha.');
        return;
      }

      if (dados.length > 0) {
        setErro(null);
        navigate('/administrativo/inicio');
      } else {
        setErro('Email ou senha incorretos');
        alert("'Usuario ou senha incorretos'")
      }
    } catch (err) {
      setErro('Erro ao tentar login');
    }
  };

  return (

    <div className="container-centralizado">
        <div className="container">

        <div className="login-img-administrativo">
            <img src={ImgLogo}  alt="Logo " />
        </div>

        <div className="login-form">
            <h3>LOGIN</h3>

        <br /><br />
          <p className="login-form-text">Usuario:</p>
          <input
        type="text"
        placeholder="Insira seu usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        required
        className="login-form-input"
      /><br />

      <p className="login-form-text">Senha:</p>
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
         className="login-form-input"
      /><br />
      

    

            <div className="container-btn-administrativo">
            <button onClick={fazerLogin} className="btn-acess" >Entrar</button> 
            </div>
            

            <span className="divisor"></span>


            <Link to={"/"} className="login-administrativo">acesso paciente</Link>
        </div>
            
        </div>

    </div>
      
  )
}

export default login;
