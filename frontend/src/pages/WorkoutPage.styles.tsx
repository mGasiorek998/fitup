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
  min-height: 90vh;
  display: ${({ display }) => (display === 'block' ? 'block' : 'flex')};
  flex-direction: column;
  justify-content: ${({ contentPos }) =>
    contentPos === 'start' ? 'flex-start' : 'space-evenly'};
  align-items: center;
`;

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr 1fr;
  gap: 32px;
  margin: 0 2rem;
`;

export const StyledCardHeading = styled.h3`
  margin-bottom: 1rem;
`;
