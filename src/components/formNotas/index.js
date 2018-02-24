import React from 'react'
import Form from '../form.js'
import FormInput from '../formInput.js'
import FormTextarea from '../formTextarea.js'
import FormButton from '../formButton.js'
import Nota from '../../nota'
import './formNotas.css'

function montaInputTitulo(notaCopiada, posicao) {
    const props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        defaultValue: notaCopiada.titulo,
        onChange: event => notaCopiada.titulo = event.target.value
    }

    //console.log(notaCopiada)
    if (posicao !== undefined && !notaCopiada.editando) {
        props.readOnly = true
    }

    return <FormInput {...props} />
}

function montaTextareaTexto(notaCopiada, posicao) {
   // console.log(notaCopiada)
    const props = {
        className: 'note__body', 
        name: 'texto', 
        placeholder: 'Criar uma nota...', 
        rows: 5, 
        defaultValue: notaCopiada.texto,
        onChange: event => notaCopiada.texto = event.target.value
    }

    if (posicao !== undefined && !notaCopiada.editando) {
        props.readOnly = true
    }

    return <FormTextarea {...props} />
}

function montaButtonRemover(removerNota, posicao) {
    const props = {
        className: 'note__control', 
        type: 'button', 
        onClick: event => {
            removerNota(event, posicao)
        }
    }

    const children = <i className='fa fa-times' aria-hidden={true} />

    return <FormButton {...props}>{children}</FormButton>
}

function montaButtonConcluir(adicionarNota, notaCopiada, posicao) {
    const props = {
        key: 'note-control',
        className: 'note__control', 
        type: 'button', 
        onClick: event => {
            event.stopPropagation()
            adicionarNota(notaCopiada.titulo, notaCopiada.texto, event.target.form, posicao)
        }
    }

    const children = 'Concluído'

    return <FormButton {...props}>{children}</FormButton>
}

function FormNotas({ notaAtual, adicionarNota, removerNota, editarFormulario, posicao }) {
    let notaCopiada = new Nota(notaAtual.titulo, notaAtual.texto, notaAtual.editando)
    
    let inputTitulo = montaInputTitulo(notaCopiada, posicao)
    let textareaTexto = montaTextareaTexto(notaCopiada, posicao)
    let buttonRemover = montaButtonRemover(removerNota, posicao)
    let buttonConcluir = montaButtonConcluir(adicionarNota, notaCopiada, posicao)
    
    let props = { className: 'note', key: 'note' }
    if (posicao !== undefined && !notaCopiada.editing) {
        props.onClick = () => editarFormulario(posicao)
    }

    return (
        <Form {...props}>
            {posicao !== undefined && notaCopiada.editando && buttonRemover}
            {inputTitulo}
            {textareaTexto}
            {(posicao === undefined || notaCopiada.editando) && buttonConcluir}
        </Form>
    )
}

export default FormNotas