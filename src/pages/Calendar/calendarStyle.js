import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  calendarContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '100px 0',
    boxSizing: 'border-box',
  },
  searchButton: {
    backgroundColor: '#c4c4c4',
    width: '530px',
    height: '45px',
    margin: '0 0 15px',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '28px',
    color: '#000',
    textTransform: 'none',
  },
  calendarMenu: {
    marginBottom: '20px',
  },
  menuButton: {
    backgroundColor: '#c4c4c4',
    width: '170px',
    height: '35px',
    margin: '0 10px 0 0',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '16px',
    color: '#000',
    textTransform: 'none',
    '&:last-of-type': {
      margin: '0',
    },
  },
  navButton: {
    backgroundColor: '#c4c4c4',
    width: '530px',
    height: '35px',
    margin: '0 0 12px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#000',
    textTransform: 'none',
  },
  days: {
    display: 'flex',

    flexWrap: 'wrap',
    width: '350px',
  },
});

export default useStyles;
