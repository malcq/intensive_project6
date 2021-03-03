import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

import Beverage from '@components/Beverage';
import { SButtonGroup, SButton, SubPage } from '@styles';
import data from '@mocks';


const BarCardList = () => {
  const { beveragesList } = data;
  return (
    <SubPage component='section'>
      <STextFeild label='Поиск' variant='filled' />
      <SButtonGroup aria-label='contained button group'>
        <SButton variant='contained'>Категории</SButton>
        <SButton variant='contained'>Открытые</SButton>
        <SButton variant='contained'>Остатки</SButton>
      </SButtonGroup>
      {beveragesList.map((beverage,idx) => <Beverage key={idx} {...beverage} />)}
    </SubPage>
  );
};

const STextFeild = styled(TextField)`
  &.MuiTextField-root {
    display: block;
    margin-bottom: 10px;
    & .MuiInputBase-root {
      display: block;
    }
  }
`;

export default BarCardList;