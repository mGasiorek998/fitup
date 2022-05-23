import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: '#FFF';
  width: 100%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);
`;

export const StyledNavigationBottom = styled.div`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  display: inherit;
  flex-direction: inherit;
  justify-content: inherit;
  align-items: inherit;
  box-shadow: inherit;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 180px;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 46px;
  left: 50%;
  transform: translateX(-50%);
`;
