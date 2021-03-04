import React, {Suspense, memo } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';


const BarCard = React.lazy(() => import('@pages/BarCard'));
const BarCardList = React.lazy(() => import('@pages/BarCard/BarCardList'));
const BarCardResult = React.lazy(() => import('@pages/BarCard/BarCardResult'));
const Beverage = React.lazy(() => import('@pages/BarCard/Beverage'));
const Calendar = React.lazy(() => import('@pages/Calendar'));
const Recipes = React.lazy(() => import('@pages/Recipes'));
const Main = React.lazy(() => import('@pages/Main'));

const AppRoutes = () => (
  <Suspense fallback={<div>Загрузка...</div>}>
    <Switch>
      {routes.map(({ subRoutes = [], ...router }) => (
        <Route 
          key={router.path}
          path={router.path}
        >
          <Route {...router} />
          {subRoutes.map((subRoute) => 
            <Route key={subRoute.path} {...subRoute} />)
          }
        </Route>
      ))}
    </Switch>
  </Suspense>
  );
 
const routes = [
  {
    path: '/barcard',
    component: BarCard,
    subRoutes: [
      {
        path: '/barcard/list',
        component: BarCardList,
      },
      {
        exact: true,
        path: '/barcard/list/:id',
        component: Beverage,
      },
      {
        exact: true,
        path: '/barcard/list/:id/result',
        component: BarCardResult,
      },
    ]
  },
  {
    path: '/calendar',
    component: Calendar
  },
  {
    path: '/recipes',
    component: Recipes
  },
  {
    path: '/',
    exact: true,
    component: Main
  }
];

export default memo(AppRoutes);