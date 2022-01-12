import './App.css'
import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import Pai from './components/comunicacao/direta/Pai'

export default (props) => 
    <div className="App">
        <Card titulo="Comunicacao Direta" color="#4298B5">
            <Pai sobrenome="Freitas"></Pai>
        </Card>
        <Card titulo="Condicional" color="#FA6900">
            <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo="Repeticao" color="#E94C6F">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="Componente Com Parametro" color="#008BBA">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
            <ComParametro titulo="Opa" subtitulo="Epa" />
        </Card>
        <Card titulo="Componente Com Filhos" color="#D96459">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                </ul>
            </ComFilhos>
        </Card >
        <Card titulo="Primeiro Componente" color="#FF85CB">
            <Primeiro />
        </Card>
    </div>