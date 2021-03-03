import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

import Link from './Link';


const Header = () => (
  <SAppBar>
    <SToolbar>
      <SIconButton aria-label="menu">
        <MenuIcon />
      </SIconButton>
      <STypography>
        <Link to="/">Главная</Link>
        <Link to="/barcard">Бар карта</Link>
        <Link to="/recipes">Рецепты</Link>
        <Link to="/calendar">Календарь</Link>
      </STypography>          
    </SToolbar>
  </SAppBar>
);

const SAppBar = styled(AppBar)`
  && {
    position: static;
  }
`;

const SToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const STypography = styled(Typography)`
  display: flex;
  width: 75%;
  justify-content: space-between;
  @media only screen and (max-width: 576px) {
    width: 100%;
  }
`;

const SIconButton = styled(IconButton)`
  && {
    color: inherit;
  }
  & svg.MuiSvgIcon-root {
    @media only screen and (max-width: 420px) {
      font-size: 1rem;
    }
  }
`;

export default Header;
