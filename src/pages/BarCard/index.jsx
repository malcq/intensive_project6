import { useRouteMatch } from 'react-router-dom';
import { SPage, PageTitle, SPanelNav } from '@styles';
import BarCardRoutes from '@routes/BarCardRoutes';
import Link from '@components/Link';

const BarCard = () => {
  let { url } = useRouteMatch();
  
  return (
    <SPage component='main'>
      <PageTitle variant='h1'>
        Карта бара
      </PageTitle>
     
      <SPanelNav>
        <Link to={`${url}/list`}>Список Бара</Link>
        <Link to={`${url}/list`}>Ревизия</Link>
        <Link to={`${url}/list`}>Внести напиток</Link>
        <Link to={url}>Назад</Link>
      </SPanelNav>
      
     {/*  <Link to={`${url}/list/bottleId`}>выбранная бутыль</Link>*/}
      
      <BarCardRoutes />
    </SPage>
  );
};

export default BarCard;