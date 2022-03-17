import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import {Container, Content} from './styles'
import Modal from 'react-modal'


interface HeaderProbs {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProbs) {

  
    return (
        <Container>
            <Content>
            <img src={logoImg} alt="dt money" />

            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transação
            </button>


            </Content>
        </Container>
        
    )
}