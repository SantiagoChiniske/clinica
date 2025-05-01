import "./style.css"

function btnAcessAdministrativo ({text,propiedade,efetuar}){
    

    return(
        <button className={propiedade} onClick={efetuar} >
                {text}
        </button>
    )
}

export default btnAcessAdministrativo;