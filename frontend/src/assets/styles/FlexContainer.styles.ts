import styled from 'styled-components';

interface StyledFlexWrapperProps {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-evenly';
  flexDirection?: 'column' | 'row';
}
export const StyledFlexWrapper = styled.div<StyledFlexWrapperProps>`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'stretch'};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'stretch')};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : 'row'};
`;
