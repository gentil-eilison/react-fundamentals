import React from "react";

export default (props) => {
    // Não pode! Props é somente leitura
    // props.titulo = 'Outro título'
    return (
        <>
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
        </>
    )
}    