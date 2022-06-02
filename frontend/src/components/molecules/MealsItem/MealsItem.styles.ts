import styled from 'styled-components';

export const StyledItem = styled.li`
  background-color: white;
  padding: 8px;
  margin: 16px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MealNameWrapper = styled.div`
  & > h2 {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const MealSummaryWrapper = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const MealsActions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
