import styled from 'styled-components';
import Card from 'components/atoms/Card/Card';

export const StyledSection = styled.section`
  margin: 4rem 0;
`;

export const StyledCard = styled(Card)`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
