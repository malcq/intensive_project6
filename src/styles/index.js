import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';

export const SCard = styled(Card)`
  width: 50%;
  height: 600px;
  position: absolute;
  top: 202px;
  right: 15px;
`;

export const SimplePage = styled(Paper)`
  && { box-shadow: unset}
  display: flex;
  justify-content: space-between;
`;

export const SPage = styled(Paper)`
  && { 
    box-shadow: unset;
    border-radius: unset;
    };
`;

export const SubPage = styled(Paper)`
  && { background-color: #fafafa;}
  width: 45%;
  padding: 10px 10px 1px;
`;

export const PageTitle = styled(Typography)`
  && { font-size: 3rem; margin: 20px 0; }
  text-align: center;
`;

export const SButtonGroup = styled(ButtonGroup)`
  && { display: flex; }
  justify-content: space-between;
`;