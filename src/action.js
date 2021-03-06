/*
 * action types
 */

export const ADICIONAR_NOTA = 'ADICIONAR_NOTA'
export const REMOVER_NOTA = 'REMOVER_NOTA'
export const HABILITAR_EDICAO = 'HABILITAR_EDICAO'
export const ALTERAR_NOTA = 'ALTERAR_NOTA'

/*
 * action creators
 */

export function adicionarNota(titulo, texto) {
    return {
        type: ADICIONAR_NOTA,
        titulo,
        texto
    }
}

export function removerNota(posicao) {
    return {
        type: REMOVER_NOTA,
        posicao
    }
}

export function habilitarEdicao(posicao) {
    return {
        type: HABILITAR_EDICAO,
        posicao
    }
}

export function alterarNota(posicao, titulo, texto) {
    return {
        type: ALTERAR_NOTA,
        posicao,
        titulo,
        texto
    }
}