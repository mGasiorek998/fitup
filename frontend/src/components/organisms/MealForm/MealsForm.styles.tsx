import styled from 'styled-components';

export const StyledForm = styled.form`
  & > div,
  & > button {
    margin-bottom: 16px;
  }
`;

export const StyledIngredientsList = styled.ul`
  max-height: 200px;
  & > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
`;
