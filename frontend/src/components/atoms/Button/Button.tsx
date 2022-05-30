import styled from 'styled-components';

interface ButtonProps {
  color: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ theme, color }) =>
    color === 'primary' ? theme.colors.darkPurple : theme.colors.lightGray};
  text-transform: uppercase;
  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '8px 5px';
      case 'medium':
        return '16px 10px';
      case 'large':
        return '20px 16px';
    }
  }};
  color: ${({ theme, color }) =>
    color === 'primary' ? '#fff' : theme.colors.darkPurple};
  border: ${({ theme, color }) =>
    color === 'primary' ? 'none' : `1px solid ${theme.colors.darkPurple}`};
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGray};
    box-shadow: unset;
    cursor: unset;
  }

  &:hover {
    box-shadow: none;
  }
`;

export default Button;
