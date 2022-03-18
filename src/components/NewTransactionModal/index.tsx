import Modal from "react-modal";
import {Container, TransactionTypeContainer, Radiobox} from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import {useState, useEffect} from 'react'

interface NewTransactionModalProbs {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProbs) {
   const [type, setType] = useState('deposit');
    
    return (

        <Modal isOpen={isOpen}
             onRequestClose={onRequestClose}
             overlayClassName="react-modal-overlay" 
             className="react-modal-content"
             > 
             <button type="button"> 
             <img src={closeImg} alt="Fechar transação"
              onClick={onRequestClose} className="react-modal-close"/>
             </button>

            <Container>
                <h2>Cadastrar transação</h2>
                <input placeholder="Título" />
                <input type="number" placeholder="Valor" />

                <TransactionTypeContainer> 

                <Radiobox type="button" 
                 onClick={() => { setType('deposit'); }} 
                 isActive={type === 'deposit'}
                 > 

                <img src={incomeImg} alt="Entradas" />
                <span>Entrada</span>

                </Radiobox>

                <Radiobox type="button" 
                onClick={() => { setType('withdraw'); }} 
                isActive={type === 'withdraw'}
                > 
                    <img src={outcomeImg} alt="Saídas" />
                    <span>Saídas</span>
                </Radiobox>

                </TransactionTypeContainer>

                <input placeholder="Categoria" />
                <button type="submit"> 
                Cadastrar
                </button>

            </Container>
            </Modal>
    )
}