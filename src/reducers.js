import { combineReducers } from 'redux'

import {
    ADICIONAR_NOTA,
    REMOVER_NOTA,
    HABILITAR_EDICAO,
    ALTERAR_NOTA,

} from './action'

import Nota from 'nota';

const estadoInicial = {
    texto: '',
    titulo: ''
};

export default function postitApp(estadoAtual = estadoInicial, action) {
    switch (action.type) {
        case ADICIONAR_NOTA:
            const novaNota = new Nota(action.titulo, action.texto);
            const estadoNovo = {
                notas: estadoAtual.notas.concat(novaNota)
            };
            return estadoNovo;
        case REMOVER_NOTA:
            const estadoNovo = {
                notas: estadoAtual.notas.filter((nota, posicao) => {
                    return posicao !== action.posicao
                })
            };
            return estadoNovo;
        case HABILITAR_EDICAO:
            const estadoNovo = {
                notas: estadoAtual.notas.map((nota, index) => {
                    if (action.posicao === index) {
                        nota.editando = true;
                    }
                    return nota;
                })
            };
            return estadoNovo;
        case ALTERAR_NOTA:
            const estadoNovo = {
                notas: estadoAtual.notas.map((nota, index) => {
                    if (action.posicao === index) {
                        nota.titulo = action.titulo;
                        nota.texto = action.texto;
                    }
                    return nota;
                })
            };
            return estadoNovo;
        default:
            return estadoInicial;

    }
}