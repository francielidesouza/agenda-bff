import { Modal } from "../Modal";

import { useNavigate } from "react-router-dom";

interface ModalErrorProps {
  toggleModal: () => void;
}

export const ModalError = ({ toggleModal }: ModalErrorProps) => {
  const navigate = useNavigate();

  const handleCloseandRedirect = () => {
    toggleModal();
    navigate("/");
  };

  return (
    <Modal toggleModal={toggleModal} blockClosing>
      <h2> Você não está autenticado !</h2>
      <button type="button" onClick={handleCloseandRedirect}>
        Ir para o login
      </button>
    </Modal>
  );
};
