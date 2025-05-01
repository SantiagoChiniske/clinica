import "./style.css"


function inputAcessAdministrativo ({name,placeholder,tipo,value,onChange}){
    return(
        <div>
            <p className="login-form-text-administrativo">{name}</p>
            <input type={tipo} className="login-form-input-administrativo" placeholder={placeholder} value={value} onChange={onChange} required />            
        </div>
    )
}

export default inputAcessAdministrativo;