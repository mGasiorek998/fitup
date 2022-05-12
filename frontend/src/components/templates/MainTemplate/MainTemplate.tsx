import NavigationMenu from 'components/molecules/NavigationMenu/NavigationMenu';
import styled from 'styled-components';

interface MainTemplateProps {
  children: React.ReactNode;
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;

  main {
    height: 100vh;
  }
`;

export default function MainTemplate({ children }: MainTemplateProps) {
  return (
    <StyledWrapper>
      <NavigationMenu />
      <main>{children}</main>
    </StyledWrapper>
  );
}
