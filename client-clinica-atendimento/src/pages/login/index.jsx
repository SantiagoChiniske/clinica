import "./style.css"
import imgLogo from "../../assets/Logo.svg"
import InputAcesso from "../../components/input-acess/index"
import BtnAcess from "../../components/btn-acess"
import  {Link,  useNavigate} from "react-router-dom"
import { useState } from 'react';

function login() {

  const [email, setEmail] = useState('');
  const [senha,setSenha] = useState('');
  const [erro,setErro] = useState(null);
  const navigate = useNavigate();

  const fazerLogin = async () => {
    try {
      const resposta = await fetch(`http://localhost:3001/usuarios?usuario=${email}&senha=${senha}`);
      const dados = await resposta.json();

      if (!email.trim() || !senha.trim()) {
        alert('Preencha o email e a senha.');
        return;
      }

      if (dados.length > 0) {
        const usuario = dados[0];
        localStorage.removeItem('usuarioLogado');
      localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

        setErro(null);
        navigate('/inicio');
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

        <div className="login-img">
            <img src={imgLogo} alt="Logo " />
        </div>

        <div className="login-form">
            <h3>LOGIN</h3>

        <br /><br />
          <p className="login-form-text">Usuario:</p>
          <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      

            
            
            <a className="login-reset-password">Esqueci a senha</a>

            <div className="container-btn">
            <button onClick={fazerLogin} className="btn-acess" >Entrar</button>
               <Link to={"/cadastro"}>
               <BtnAcess text ={"Cadastrar"} propiedade={"btn-acess"}/>
               </Link>
               
            </div>
            

            <span className="divisor"></span>


            <Link to={"/administrativo"} className="login-administrativo">acesso administrativo</Link>
        </div>
            
        </div>

    </div>
      
  )
}

export default login;
