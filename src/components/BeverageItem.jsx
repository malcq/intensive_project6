import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Beverage = ({
  id, url, title, description, capacity,
  volume, category, measurement,
  onBeverageClick
}) => {
  const onClick = () => onBeverageClick(id);

  return (
  <SCard onClick={onClick}>
    <SCardActionArea>
      <SCardMedia
        image={url}
        title={title}
      />
      <SCardContent>
        <CardUpper component='div'>
          <CardUpperText component='span'>
            {category}
          </CardUpperText>
          <CardUpperText component='span'>
            {id}
          </CardUpperText>
        </CardUpper>
       <CardTitle variant='h5' component='h2'>
          {title}
          <CardSubText component='span'>
            {volume}
          </CardSubText>
        </CardTitle>
       <CardSubText component='p'>
          {description}, {capacity * 100}%
        </CardSubText>
        <CardSubText component='p'>
          "{measurement}"
        </CardSubText>
      </SCardContent>
    </SCardActionArea>
  </SCard>);
};

const SCard = styled(Card)`
  margin-top: 10px;
`;

const CardUpper = styled(Typography)`
  && {
    display: flex;
    justify-content: space-between;
  }
`;

const CardUpperText = styled(Typography)`
  && {font-size: .875rem;}
`;

const CardSubText = styled(Typography)`
  && {font-size: 1.125rem;}
`;

const CardTitle = styled(Typography)`
  && {margin: 5px 0;}
  display: flex;
  justify-content: space-between;
`;

const SCardActionArea = styled(CardActionArea)`
  && {display: flex; justify-content: space-between;}
  width: 100%;
`;

const SCardContent = styled(CardContent)`
  width: 75%;
  background-color: #C4C4C4;
`;

const SCardMedia = styled(CardMedia)`
  width: 106px;
  height: 80px;
`;

export default Beverage;