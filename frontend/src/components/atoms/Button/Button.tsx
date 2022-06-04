import styled from 'styled-components';

interface ButtonProps {
  fullWidth?: boolean;
  color: 'primary' | 'secondary' | 'transparent';
  size: 'small' | 'medium' | 'large';
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ color, theme }) => {
    switch (color) {
      case 'primary':
        return theme.colors.darkPurple;
      case 'secondary':
        return theme.colors.lightGray;
      case 'transparent':
        return 'transparent';
      default:
        return color;
    }
  }};
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
  color: ${({ color, theme }) => {
    switch (color) {
      case 'primary':
        return '#fff';
      case 'secondary':
      case 'transparent':
        return theme.colors.darkPurple;
      default:
        return color;
    }
  }};
  border: ${({ color, theme }) => {
    switch (color) {
      case 'primary':
        return 'none';
      case 'secondary':
        return theme.colors.darkPurple;
      case 'transparent':
        return 'none';
      default:
        return color;
    }
  }};
  border-radius: 5px;
  box-shadow: ${({ color }) =>
    color === 'transparent' ? 'none' : '0 2px 4px 0 rgba(0, 0, 0, 0.25)'};
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGray};
    box-shadow: unset;
    cursor: unset;
  }

  &:hover {
    box-shadow: none;
  }

  &:focus {
    background-color: red;
  }
`;

export default Button;
