import styled from 'styled-components';

export const StyledWrapper = styled.li`
  min-height: 100px;
  width: 100%;
  margin: 1rem 0;
  box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WorkoutDetails = styled.div`
  margin: 0 1rem;
  & > p {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const WorkoutNameWrapper = styled(WorkoutDetails)`
  & > h2 {
    text-align: left;
  }
`;

export const WorkoutItemActionsWrapper = styled.div`
  & > button {
    width: 100px;
    margin-right: 8px;
  }
`;
