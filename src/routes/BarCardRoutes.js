import React, {Suspense, memo } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';


const BarCardList = React.lazy(() => import('@pages/BarCard/BarCardList'));
const BarCardListItem = React.lazy(() => import('@pages/BarCard/BarCardListItem'));

const BarCardRoutes = () => (
  <Suspense fallback={<div>Загрузка...</div>}>
    <Switch>
      {routes.map((router) => (
        <Route
          key={router.path}
          { ...router }
        />
      ))} 
    </Switch>
  </Suspense>
  );
 
const routes = [
  {
    exact: true,
    path: '/barcard/list',
    component: BarCardList,
  },
  {
    exact: true,
    path: '/barcard/list/:id',
    component: BarCardListItem,
  },
];

export default memo(BarCardRoutes);