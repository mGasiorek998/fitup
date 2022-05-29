import styled from 'styled-components';

interface ButtonProps {
  color: 'primary' | 'secondary';
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ theme, color }) =>
    color === 'primary' ? theme.colors.darkPurple : theme.colors.lightGray};
  text-transform: uppercase;
  padding: 16px 10px;
  color: ${({ theme, color }) =>
    color === 'primary' ? '#fff' : theme.colors.darkPurple};
  border: ${({ theme, color }) =>
    color === 'primary' ? 'none' : `1px solid ${theme.colors.darkPurple}`};
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    box-shadow: none;
  }
`;

export default Button;
