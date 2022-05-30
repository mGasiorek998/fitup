import Overlay from 'components/atoms/Overlay/Overlay';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModelWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 4rem;
  z-index: 5;
  box-shadow: 0 5px 16px 0 rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

const modalContainer = document.getElementById('modalPortal');

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer?.appendChild(modalNode);

    return () => {
      modalContainer?.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    isOpen && (
      <>
        <Overlay onClick={onClose} />
        <ModelWrapper>{children}</ModelWrapper>
      </>
    ),
    modalNode
  );
}
