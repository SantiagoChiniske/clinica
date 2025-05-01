import "./style.css"

function btnAcess ({text,propiedade}){
    

    return(
        <button className={propiedade} >
                {text}
        </button>
    )
}

export default btnAcess;