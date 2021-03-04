import { SPage, PageTitle } from '@styles';
import TabPanel from '@components/TabPanel';
import tabs from '@mocks/tabs';

const BarCard = () => (
  <SPage component='main'>
    <PageTitle variant='h1'>
      Карта бара
    </PageTitle>
    <TabPanel tabs={tabs.barCardList} />
  </SPage>
);

export default BarCard;