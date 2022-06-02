import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';

export const FullMealWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const MealHeader = styled.div`
  position: relative;
  height: 35%;

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

interface MealSummaryProps {
  pictureExist: boolean;
}
export const MealSummary = styled.div<MealSummaryProps>`
  background-color: white;
  position: absolute;
  width: 80%;
  top: ${({ pictureExist }) => (pictureExist ? 'auto' : '32px')};
  bottom: ${({ pictureExist }) => (pictureExist ? '-32px' : 'auto')};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const MealDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  position: absolute;
  top: 50%;
  width: 100%;
  gap: 20px;
  padding: 0 1rem;
`;

interface MealDetailProps {
  fullWidth?: boolean;
}
export const MealDetial = styled.div<MealDetailProps>`
  flex-basis: ${({ fullWidth }) => (fullWidth ? '100%' : 'calc(50% - 20px)')};
  & > h2 {
    border-bottom: 1px solid black;
  }
`;

export const MealLikeButton = styled(Button)`
  position: absolute;
  left: 50%;
  bottom: 8px;
  transform: translateX(-50%);
  width: 90%;
`;

export const IngredientsList = styled.ul`
  list-style: none;
  margin-top: 8px;
  max-height: 250px;
  overflow-y: scroll;

  & > li {
    margin-bottom: 8px;
  }
`;
