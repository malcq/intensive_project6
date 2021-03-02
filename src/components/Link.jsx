import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

const SLink = ({to, children}) => (
  <Link
    color='inherit'
    component={RouterLink}
    to={to}
  >
    {children}
  </Link>
);

SLink.propTypes ={ 
  to: PropTypes.string,
  children: PropTypes.node,
};

export default SLink;