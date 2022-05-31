import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  padding: 2rem;
  min-height: inherit;
  height: 100%;

  & > div {
    margin-bottom: 4rem;
  }

  & > h2 {
    margin-bottom: 4rem;
  }

  & > ul > li {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  & > button {
    position: absolute;
    left: 50%;
    bottom: 16px;
    transform: translateX(-50%);
    width: 80%;
  }
`;
