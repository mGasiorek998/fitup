import styled from 'styled-components';

export const StyledExercisesList = styled.ul`
  max-height: 100px;
  overflow-x: scroll;

  & > li {
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;
