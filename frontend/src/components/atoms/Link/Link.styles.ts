import { NavLink } from 'react-router-dom';
import { LinkProps } from './Link';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)<LinkProps>`
  margin: 20px 0;
  text-decoration: none;
  padding: 0.5rem 3rem;
  border-radius: 6px;
  color: ${({ theme, color }) =>
    color === 'primary' ? theme.colors.darkPurple : '#FFF'};
  font-size: ${({ theme }) => theme.fontSize.m};

  &:hover {
    background-color: ${({ theme, color }) =>
      color === 'primary' ? theme.colors.darkPurple : '#FFF'};
    color: ${({ theme, color }) =>
      color === 'primary' ? '#FFF' : theme.colors.darkPurple};
  }
`;
