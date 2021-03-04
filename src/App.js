import AppRoutes from './routes';
import Header from './components/Header';

import tabs from '@mocks/tabs';


const App = () => (
  <>
    <Header tabs={tabs.header} />
    <AppRoutes />
  </>
);
export default App;
