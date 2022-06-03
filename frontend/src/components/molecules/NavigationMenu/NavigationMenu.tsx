import { StyledFlexWrapper } from 'assets/styles/FlexContainer.styles';
import Link from 'components/atoms/Link/Link';
import { StyledNavigation, LogoWrapper } from './NavigationMenu.styles';

export default function NavigationMenu() {
  return (
    <StyledNavigation>
      <LogoWrapper>
        <h1 style={{ justifySelf: 'flex-start' }}>FITUP</h1>
      </LogoWrapper>
      <StyledFlexWrapper flexDirection="column">
        <Link
          to="/"
          color="primary"
          className={(isActive) => (isActive ? 'active' : '')}
        >
          DASHBOARD
        </Link>
        <Link to="/workouts" color="primary">
          WORKOUTS
        </Link>
        <Link to="/meals" color="primary">
          MEALS
        </Link>
      </StyledFlexWrapper>
    </StyledNavigation>
  );
}
