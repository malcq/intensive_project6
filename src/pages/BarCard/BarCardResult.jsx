import { useParams, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

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

const SCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 600px;
  position: absolute;
  top: 202px;
  right: 15px;
`;
const SButton = styled(Button)`
&&{display: block;margin: auto auto 10px;}
width: 70%;

`;
const Content = styled(Typography)`
  && {margin: 5px 0};
  display: flex;
  justify-content: space-between;
`;

const Text = styled(Typography)`
  && {font-size: 1.125rem;}
`;

const MediumText = styled(Typography)`
  && {font-size: 1.5rem;}
`;

const LargeText = styled(Typography)`
  && {font-size: 2.25rem;}
`;

const SCardContent = styled(CardContent)`
&& {padding-bottom: 0}
`;
export default BarCardResult;