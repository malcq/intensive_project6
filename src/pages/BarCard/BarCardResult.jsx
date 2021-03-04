import { useParams, Link } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import {Content, MediumText, Text, LargeText } from '@styles/card';
import {SCard} from '@styles';

import data from '@mocks';


const BarCardResult = () => {
const {id: activeId } = useParams();
const { beveragesList } = data; 
const curBeverage = beveragesList.find(({id}) => activeId === id);
  const {
    id, title, full_descr, description, capacity,
    volume, category, measurement, full_img,
  } = curBeverage;
  return (
    <SCard> 
      <SCardContent>
        <Content component='div'>
          <MediumText component='h6'>
            Карта бара
          </MediumText>
        </Content>
        <Content component='div'>
          <Text>Дата</Text>
          <Text>23:47 03-02-2021</Text>
        </Content>
        <Content component='div'>
          <Text>{category}</Text>
          <Text>Объем</Text>
        </Content>
        <Content component='div'>
          <LargeText>{title}</LargeText>
          <LargeText>{volume}л</LargeText>
        </Content>
        <Content component='div'>
          <MediumText>
            {description}
          </MediumText>
        </Content>
        <Content component='div'>
          <MediumText>
            Остаток в баре
          </MediumText>
        </Content>
       
          <List>
            {beveragesList.map((beverage, idx) => <ListItem key={idx}><Text>{beverage.id}</Text></ListItem>)}
          </List>
        
      </SCardContent>
        <SButton variant='contained' component={Link} to='/barcard/list'>Назад</SButton>   
    </SCard>
  );
};

const SButton = styled(Button)`
  &&{
    display: block;
    margin: auto auto 10px;
  }
  width: 70%;
`;

const SCardContent = styled(CardContent)`
  && {padding-bottom: 0}
`;

export default BarCardResult;