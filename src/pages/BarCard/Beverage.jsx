import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import BarForm from '@components/BarForm';
import {Text, SubText, LargeText, MediumText } from '@styles/card';
import {SCard } from '@styles';

import data from '@mocks';


const Beverage = () => {
  const { beveragesList } = data;
  const [choice, setChoice] = useState(false);
  const  toggleChoice = () => setChoice(!choice);
  const {id: activeId }  = useParams();
  const curBeverage = beveragesList.find(({id}) => activeId === id);
  const {
    id, title, full_descr, capacity,
    volume, category, measurement, full_img,
  } = curBeverage;
  return (
    <SCard>
      <UpperContent component='div'>
        <SCardMedia
          image={full_img}
          title={title}
        />
        <SCardContent component='div'>
       
        <CardUpper component='div'>
          <SubText component='p'>
            {category}
          </SubText>
          <Text component='p'>
            {id}
          </Text>
        </CardUpper>
        <CardTitle variant='h5' component='h5'>
          {title}
        </CardTitle>
        <CardVolume component='p'>
          <Text component='span'>
            объем
          </Text>
          <LargeText component='span'>
            {volume}л
          </LargeText>
        </CardVolume>
        
        <SubText component='p'>
          {full_descr} 
        </SubText>
       
        </SCardContent>
      </UpperContent>
      <LowerContent component='p'>
        <MediumText component='span'>
          В баре:
        </MediumText>
        <MediumText component='span'>
          "{measurement}" {capacity * 100}%
        </MediumText>
      </LowerContent>
      
      <Panel component='div'>
        {!choice
        ?
          <>
            <SButton 
              variant='contained'
              component={Link}
              to={`/barcard/list/${id}/recipes`}
            >
              Рецепты
            </SButton>
            <SButton
              variant='contained'
              onClick={toggleChoice}
            >
              Достать из бара
            </SButton>
          </>
        :
          <BarForm onCancel={toggleChoice} id={id} />
        }
        
      </Panel>
  </SCard>);
};

const Panel = styled(Typography)`
  && {
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }
`;

const UpperContent = styled(Typography)`
  padding: 10px 0 0;
  display: flex;
`;
const LowerContent = styled(Typography)`
  && {margin: 20px;}
  display: flex;
  justify-content: space-between;
`;

const CardUpper = styled(Typography)`
  && {
    display: flex;
    justify-content: space-between;
  }
`;

const CardTitle = styled(Typography)`
  && {margin: 5px 0;}
  display: flex;
  justify-content: center;
`;

const CardVolume = styled(Typography)`
  && {margin: 5px 0;}
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const SCardContent = styled(CardContent)`
&& {padding-bottom: 0}
  width: 55%;
`;

const SCardMedia = styled(CardMedia)`
  && {background-size: contain;
  }
  
  flex: 1;
  max-width: 160px;
`;

const SButton= styled(Button)`
  &&{
    margin-bottom: 10px;
  }
 
`;

export default Beverage;