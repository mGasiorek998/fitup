import styled from 'styled-components';

interface DayButtonStylesProps {
  isSelected: boolean;
}

export const StyledDayButton = styled.div<DayButtonStylesProps>`
  & > input {
    display: none;
  }

  & > label {
    color: ${({ theme, isSelected }) =>
      isSelected ? '#fff' : theme.colors.darkPurple};
    background-color: ${({ theme, isSelected }) =>
      isSelected ? theme.colors.darkPurple : 'trasparent'};
    font-size: ${({ theme }) => theme.fontSize.m};
    cursor: pointer;
    padding: 40px 30px;
    border-radius: 20px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkPurple};
      color: #fff;
    }
  }
`;
