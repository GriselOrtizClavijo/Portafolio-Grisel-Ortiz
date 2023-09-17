import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ButtonWithModal =({ buttonText, modalContent }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    return (
      <div>
        <button className="btn-modal" onClick={openModal}>{buttonText}</button>
        <Modal
          className="modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Información adicional"
        >
          <h2 className="items-center pt-10 text-2xl  font-extrabold text-black">{buttonText}</h2>
          <p  className="items-center text-s text-black p-modal">{modalContent}</p>
          <button onClick={closeModal} className="btn-close">Cerrar</button>
        </Modal>
      </div>
    );
  };
  
  export default ButtonWithModal;