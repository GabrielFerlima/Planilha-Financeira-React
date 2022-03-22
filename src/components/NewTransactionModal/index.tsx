import Modal from "react-modal";
import {useState, useEffect, FormEvent, useContext} from 'react'
import {Container, TransactionTypeContainer, Radiobox} from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import {api} from '../../services/api'
import {TransactionsContext} from '../../TransactionsContext'


interface NewTransactionModalProbs {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProbs) {
    const { createTransaction } = useContext(TransactionsContext);

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('')
   
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        createTransaction({
            title, 
            amount, 
             category,
             type,

        })
        
    }

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

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input placeholder="Título"
                value={title} 
                onChange={event => setTitle(event.target.value)} />

                <input type="number" placeholder="Valor" 
                value={amount} 
                onChange={event => setAmount(+event.target.value)}
                />

                <TransactionTypeContainer> 

                <Radiobox type="button" 
                 onClick={() => { setType('deposit'); }} 
                 isActive={type === 'deposit'}
                 activeColor = "green"
                 > 

                <img src={incomeImg} alt="Entradas" />
                <span>Entrada</span>

                </Radiobox>

                <Radiobox type="button" 
                onClick={() => { setType('withdraw'); }} 
                isActive={type === 'withdraw'}
                activeColor = "red"
                > 
                    <img src={outcomeImg} alt="Saídas" />
                    <span>Saídas</span>
                </Radiobox>

                </TransactionTypeContainer>

                <input placeholder="Categoria" 
                value={category} 
                onChange={event => setCategory(event.target.value)}
                
                />
                <button type="submit"> 
                Cadastrar
                </button>

            </Container>
            </Modal>
    )
}

function transactionsContext(transactionsContext: any) {
    throw new Error("Function not implemented.");
}
