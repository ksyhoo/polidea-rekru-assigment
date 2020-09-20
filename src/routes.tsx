import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = {
  Landing: React.lazy(() => import('pages/Landing')),
  Repository: React.lazy(() => import('pages/Repository')),
};

export const Routes: React.SFC = () => (
  <BrowserRouter>
    <React.Suspense fallback={<p>Loading</p>}>
      <Switch>
        <Route exact path="/" component={Router.Landing} />
        <Route path="/repository/:repo/:owner" component={Router.Repository} />
      </Switch>
    </React.Suspense>
  </BrowserRouter>
);
