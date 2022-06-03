import styled from 'styled-components';
import Card from 'components/atoms/Card/Card';

export const StyledSection = styled.section`
  margin: 4rem 0;
`;

interface StyledCardProps {
  contentPos?: string;
  display?: string;
}
export const StyledCard = styled(Card)<StyledCardProps>`
  height: 75vh;
  display: ${({ display }) => (display === 'block' ? 'block' : 'flex')};
  flex-direction: column;
  justify-content: ${({ contentPos }) =>
    contentPos === 'start' ? 'flex-start' : 'space-evenly'};
  align-items: center;
  overflow-y: scroll;
`;

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr 1fr;
  grid-template-rows: 3fr 100%;
  gap: 32px;
  margin: 0 1rem;
  width: calc(100% - 2rem);
`;

export const StyledWrapperWithTwoColumns = styled(StyledWrapper)`
  grid-template-columns: 0.4fr 0.6fr;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6vh;
`;

export const StyledCardHeading = styled.h3``;

export const StyledList = styled.ul`
  list-style: none;
  width: 90%;
  margin: 0 auto;
`;

export const Divider = styled.div`
  width: 90%;
  margin: 8px auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
