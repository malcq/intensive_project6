import React, {Suspense, memo } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

const BarCard = React.lazy(() => import('@pages/BarCard'));
const Calendar = React.lazy(() => import('@pages/Calendar'));
const Recipes = React.lazy(() => import('@pages/Recipes'));
const Main = React.lazy(() => import('@pages/Main'));

const AppRoutes = () => (
  <Suspense fallback={<div>Загрузка...</div>}>
    <Switch>
      {routes.map((router) => (
        <Route
          key={router.path}
          {...router}
        />
      ))} 
    </Switch>
  </Suspense>
  );
 
const routes = [
  {
    path: '/barcard',
    exact: true,
    component: BarCard
  },
  {
    path: '/calendar',
    exact: true,
    component: Calendar
  },
  {
    path: '/recipes',
    exact: true,
    component: Recipes
  },
  {
    path: '/',
    exact: true,
    component: Main
  }
];

export default memo(AppRoutes);