import Modal from "react-modal";
import {Container} from './styles'
import closeImg from '../../assets/close.svg'

interface NewTransactionModalProbs {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProbs) {
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
                <input placeholder="Categoria" />
                <button type="submit"> 
                Cadastrar
                </button>

            </Container>
            </Modal>
    )
}