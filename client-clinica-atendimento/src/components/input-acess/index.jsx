import "../input-acess/style.css"


function inputAcess ({name,placeholder,tipo,value,onChange}){
    return(
        <>
            <p className="login-form-text">{name}</p>
            <input type={tipo} className="login-form-input" placeholder={placeholder} value={value} onChange={onChange} required />            
        </>
    )
}

export default inputAcess;