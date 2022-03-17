import Modal from "react-modal";

interface NewTransactionModalProbs {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProbs) {
    return (

        <Modal isOpen={isOpen}
             onRequestClose={onRequestClose}> 
                <h2>Cadastrar transação</h2>
            </Modal>
    )
}