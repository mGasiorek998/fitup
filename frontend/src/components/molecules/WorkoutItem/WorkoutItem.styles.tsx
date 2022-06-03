import styled from 'styled-components';

export const StyledWrapper = styled.li`
  min-height: 100px;
  width: 100%;
  padding: 0.5rem;
  margin: 1rem 0;
  box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WorkoutDetails = styled.div`
  & > p {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

interface WorkoutActionProps {
  fullWidth?: boolean;
}
export const WorkoutAction = styled.div<WorkoutActionProps>`
  flex-basis: ${({ fullWidth }) => (fullWidth ? '100%' : 'calc(50% - 5px)')};
`;

export const WorkoutNameWrapper = styled(WorkoutDetails)`
  & > h2 {
    text-align: left;
  }
`;

export const WorkoutItemActionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
