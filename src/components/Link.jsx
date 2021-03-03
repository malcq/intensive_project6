import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import styled from 'styled-components';

const CustomLink = ({to, children}) => (
  <SLink
    component={RouterLink}
    to={to}
  >
    {children}
  </SLink>
);

CustomLink.propTypes ={ 
  to: PropTypes.string,
  children: PropTypes.node,
};

const SLink = styled(Link)`
  && {
    color: inherit;
  } 
  font-size: 1.25rem;
  @media only screen and (max-width: 576px) {
    font-size: 1rem;
    width: 100%;
  }
  @media only screen and (max-width: 420px) {
    font-size: .7rem;
  }
`;

export default CustomLink;