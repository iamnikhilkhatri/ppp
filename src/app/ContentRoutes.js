import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404 from '../Error404';
import { ROUTES } from '../common/constants';
import DashboardWrapper from '../modules/DashboardWrapper';
import Settings from '../modules/Settings';
import Transaction from '../modules/Transaction';
import Support from '../modules/Support';

const ContentRoutes = () => (
  <Switch>
    <Route path={ROUTES?.MAIN} exact component={DashboardWrapper} />
    <Route path={ROUTES?.TRANSACTION} exact component={Transaction} />
    <Route path={ROUTES?.SETTINGS} exact component={Settings} />
    <Route path={ROUTES?.SUPPORT} exact component={Support} />
    <Route path="*" exact component={Error404} />
  </Switch>
);

export default ContentRoutes;
