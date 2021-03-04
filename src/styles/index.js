import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import styled from 'styled-components';

export const SCard = styled(Card)`
  && {
      margin: 10px auto;
      max-width: 500px;
      flex: 1;
      background-color: #fafafa;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const SPage = styled(Paper)`
  && { 
    box-shadow: unset;
    border-radius: unset;
  };
`;

export const PageTitle = styled(Typography)`
  && { font-size: 3rem; margin: 20px 0; }
  text-align: center;
`;

export const SButtonGroup = styled(ButtonGroup)`
  && { display: flex; }
  justify-content: space-between;
`;