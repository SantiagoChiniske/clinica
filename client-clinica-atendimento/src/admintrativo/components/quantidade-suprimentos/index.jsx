import "./style.css"

function quantidadeSuprimentos({nomeMedicamento,quantidadeMg, quantidade}){
    return(
        <>
        <section className="suprimentoss">

            <div className="quantidade-suprimentos">
                <p className="suprimentos-paragrafo1">{nomeMedicamento}</p>
                <p className="suprimentos-paragrafo2">{quantidadeMg}</p>
                <p className="suprimentos-paragrafo3">{quantidade}</p>
            </div>

        </section>
        </>
    )
}

export default quantidadeSuprimentos