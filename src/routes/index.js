import React, {Suspense, memo } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

const BarMap = React.lazy(() => import('../pages/BarMap'));
const Calendar = React.lazy(() => import('Pages/Calendar'));
const Recipes = React.lazy(() => import('Pages/Recipes'));
const Main = React.lazy(() => import('Pages/Main'));

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
    path: '/barmap',
    exact: true,
    component: BarMap
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