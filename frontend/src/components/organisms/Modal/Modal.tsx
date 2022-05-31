import Overlay from 'components/atoms/Overlay/Overlay';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModelWrapper } from './Modal.styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

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
