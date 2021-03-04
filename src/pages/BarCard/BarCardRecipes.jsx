import { useParams, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import styled from 'styled-components';

import {Content, MediumText } from '@styles/card';
import {SCard  } from '@styles';

import data from '@mocks';



const Recipes = () => {
  const { beveragesList } = data;
  const {id: activeId }  = useParams();
  const curBeverage = beveragesList.find(({id}) => activeId === id);
  const { recipes } = curBeverage;

  return (
    <SCard>
      <SCardContent>
        <Content component='div'>
          <MediumText component='h6'>
            Карта бара
          </MediumText>
        </Content>
        <List>
          {recipes.map(({title}, idx) => <ListItem key={idx}>{title}</ListItem>)}
        </List>
      </SCardContent>
      <Button variant='contained' component={Link} to={`/barcard/list/${activeId}`}>Назад</Button>
    </SCard>   
  );
};

const SCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


export default Recipes;