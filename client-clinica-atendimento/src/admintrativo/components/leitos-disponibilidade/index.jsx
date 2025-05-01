import ImgInfo from "../../assets/info.svg"
import "./style.css"

function leitoDisponibilidade({numeroCama,styleDisponibilidade,statusDisponibilidade}){
    return(
        <>
        <div>
            <p className="titulo-leitos">{numeroCama}</p>
            <div className={styleDisponibilidade}>
                <p>{statusDisponibilidade}</p>
                <img src={ImgInfo} alt="adicionar" className="img-adicionar" />
            </div>
        </div>
        
        </>
    )
}

export default leitoDisponibilidade;