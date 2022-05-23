import { NavLinkProps } from 'react-router-dom';
import { StyledNavLink } from './Link.styles';

export interface LinkProps extends NavLinkProps {
  color: 'primary' | 'secondary';
}

export default function Link({ color, children, ...props }: LinkProps) {
  return (
    <StyledNavLink color={color} {...props}>
      {children}
    </StyledNavLink>
  );
}
