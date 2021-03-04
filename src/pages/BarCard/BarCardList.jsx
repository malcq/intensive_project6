import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import BeverageItem from '@components/BeverageItem';
import Link from '@components/Link';
import { SButtonGroup, SubPage, SimplePage } from '@styles';
import data from '@mocks';


const BarCardList = () => {
  const { beveragesList } = data;
 
  return (
    <SimplePage>
    <SubPage component='section'>
      <STextFeild label='Поиск' variant='filled' />
      <SButtonGroup aria-label='contained button group'>
        <Button variant='contained'>Категории</Button>
        <Button variant='contained'>Открытые</Button>
        <Button variant='contained'>Остатки</Button>
      </SButtonGroup>
    
      {beveragesList.map((beverage, idx) =>
        <Link to={`/barcard/list/${beverage.id}`}  key={idx}>
          <BeverageItem
            {...beverage}
            onBeverageClick={() =>{}}
          />
          </Link>)
        }
    </SubPage>
    </SimplePage>
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