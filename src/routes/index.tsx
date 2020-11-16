import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

const Home = lazy(() => import('pages/home'));

const Routes = () => {
  return (
    <Switch>
      <Suspense fallback={<h1>'Loading Page...</h1>}>
        <Route exact path="/" component={Home} />
      </Suspense>
    </Switch>
  );
};

export default Routes;
