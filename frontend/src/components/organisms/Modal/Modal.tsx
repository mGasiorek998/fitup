import Overlay from 'components/atoms/Overlay/Overlay';
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

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <Overlay onClick={onClose} />
      <ModelWrapper>{children}</ModelWrapper>
    </>,
    document.getElementById('modalPortal') as Element
  );
}
