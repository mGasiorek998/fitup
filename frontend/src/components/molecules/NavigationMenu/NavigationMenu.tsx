import { StyledFlexWrapper } from 'assets/styles/FlexContainer.styles';
import Link from 'components/atoms/Link/Link';
import {
  StyledNavigation,
  LogoWrapper,
  StyledNavigationBottom,
} from './NavigationMenu.styles';

export default function NavigationMenu() {
  return (
    <StyledNavigation>
      <LogoWrapper>
        <h1 style={{ justifySelf: 'flex-start' }}>FITUP</h1>
      </LogoWrapper>
      <StyledFlexWrapper flexDirection="column">
        <Link to="/" color="primary">
          DASHBOARD
        </Link>
        <Link to="/workouts" color="primary">
          WORKOUTS
        </Link>
        <Link to="/diets" color="primary">
          DIETS
        </Link>
      </StyledFlexWrapper>
      <StyledNavigationBottom>
        <StyledFlexWrapper flexDirection="column">
          <Link to="/settings" color="secondary">
            SETTINGS
          </Link>
          <Link to="/logout" color="secondary">
            LOGOUT
          </Link>{' '}
          {/* Logout should be a button instead */}
        </StyledFlexWrapper>
      </StyledNavigationBottom>
    </StyledNavigation>
  );
}