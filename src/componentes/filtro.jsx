export const FiltroClasse = ({classe, selecionarClasse, onSelecionarClasse}) => {

    return(
        <div className="filtro">
            {classe.map((classe) => (
                <button
                    key = {classe}
                    className = {`{filtro-btn} ${selecionarClasse === classe ? "ativo" : ""}`}
                    onClick = {() => onSelecionarClasse(classe)}
                >
                    {classe}
                </button>
            ))}
        </div>
    );   
}

export const FiltroRaridade = ({raridade, selecinarRaridade, onSelecionarRaridade}) => {

    return(
        <div className="filtro">
            {raridade.map((raridade) =>(
                <button
                    key = {raridade}
                    className = {`{filtr-btn} ${selecinarRaridade === raridade ? "ativo" : ""}`}
                    onClick = {() => onSelecionarRaridade(raridade)}
                >
                    {raridade}
                </button>
            ))}
        </div>
    );
}