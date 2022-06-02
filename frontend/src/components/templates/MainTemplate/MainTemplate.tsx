import NavigationMenu from 'components/molecules/NavigationMenu/NavigationMenu';
import { StyledWrapper } from './MainTemplate.styles';

interface MainTemplateProps {
  children: React.ReactNode;
}

export default function MainTemplate({ children }: MainTemplateProps) {
  return (
    <StyledWrapper>
      <NavigationMenu />
      <main>{children}</main>
    </StyledWrapper>
  );
}
