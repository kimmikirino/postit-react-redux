import React from 'react';
import { connect } from 'react-redux';
import { adicionarNota, removerNota, habilitarEdicao, alterarNota} from '../../actions';
import Page from './index'

const mapStateToProps = state => { listaNotas: state.notas }

const mapDispatchToProps = dispatch => (
    {
        adicionarNota: (titulo, texto, formulario, posicao) => {
            if(posicao === undefined) {
                dispatch(adicionarNota(titulo, texto))
                formulario.reset()
            } else {
                dispatch(alterarNota(posicao, titulo, texto))
            }
        },
        removerNota: (evento, posicao) => {
            evento.stopPropagation();
            dispatch(removerNota(posicao))
        },
        editarFormulario: posicao => {
            dispatch(habilitarEdicao(posicao))
        }
    }
)

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page)
