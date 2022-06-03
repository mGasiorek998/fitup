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

export const LogoWrapper = styled.div`
  position: absolute;
  top: 46px;
  left: 50%;
  transform: translateX(-50%);
`;
