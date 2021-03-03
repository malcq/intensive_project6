import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const SPage = styled(Paper)`
  && { box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);}
  max-width: 98%;
  margin: 5px auto;
  padding: 10px 15px;
  box-sizing: border-box;
`;

export const SubPage = styled(Paper)`
  && { background-color: #fafafa;}
  max-width: 40%;
  padding: 10px 10px 1px;
`;

export const PageTitle = styled(Typography)`
  && { font-size: 3rem; }
  text-align: center;
`;

export const SPanelNav = styled(Typography)`
  && {margin: 10px auto;}
  display: flex;
  width: 50%;
  justify-content: space-between;

  @media only screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const SButtonGroup = styled(ButtonGroup)`
  && { display: flex; }
  justify-content: space-between;
`;

export const SButton = styled(Button)``;