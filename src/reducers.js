import { combineReducers } from 'redux'

import {
    ADICIONAR_NOTA,
    REMOVER_NOTA,
    HABILITAR_EDICAO,
    ALTERAR_NOTA,

} from './action'

import Nota from './nota';

const estadoInicial = {
    notas: []
};

export default function postitApp(estadoAtual = estadoInicial, action) {
    switch (action.type) {
        case ADICIONAR_NOTA:
            const novaNota = new Nota(action.titulo, action.texto);
            return {
                notas: estadoAtual.notas.concat(novaNota)
            };
        case REMOVER_NOTA:
            return {
                notas: estadoAtual.notas.filter((nota, posicao) => {
                    return posicao !== action.posicao
                })
            };
        case HABILITAR_EDICAO:
            return {
                notas: estadoAtual.notas.map((nota, index) => {
                    if (action.posicao === index) {
                        nota.editando = true;
                    }
                    return nota;
                })
            };
        case ALTERAR_NOTA:
            return {
                notas: estadoAtual.notas.map((nota, index) => {
                    if (action.posicao === index) {
                        const novaNota = new Nota(action.titulo, action.texto, false);
                        console.log(novaNota)
                        return novaNota; 
                    } else {
                        return nota;
                    }
                })
            };
        default:
            return estadoInicial;

    }
}