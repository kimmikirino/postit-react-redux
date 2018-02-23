import React from 'react'
import Section from '../section'
import FormNotas from '../formNotas'
import './sectionNotas.css'

function montaFormNotas(posicao, listaNotas, adicionarNota, removerNota, editarFormulario) {
    const props = {
        posicao,
        notaAtual: listaNotas[posicao],
        removerNota,
        adicionarNota,
        editarFormulario,
    }

    return <FormNotas key={posicao} {...props} />
}

function SectionNotas({ listaNotas, adicionarNota, removerNota, editarFormulario }) {
    const props = { className: 'notes' }

    const children = listaNotas.map((notaAtual, posicao) => (
        montaFormNotas(posicao, notaAtual, adicionarNota, removerNota, editarFormulario)
    ))

    return <Section {...props}>{children}</Section>
}

export default SectionNotas