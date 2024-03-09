import React, { useContext, useState } from 'react';
import { Router, Switch } from 'react-router-dom';
import { AppContext } from './AppContext';
import PublicRoute from './PublicRoute';
import App from './app/App';
import { ROUTES } from './common/constants';
import history from './historyData';
import Login from './modules/auth/component/Login';
import Register from './modules/auth/component/Register';
import Error404 from './Error404';
import Oauth from './modules/auth/oAuth';
import Forget from './modules/auth/component/Forget';
import Verify from './modules/auth/component/Verify';
import Reset from './modules/auth/component/Reset';
const Routes = () => {
  const { getToken } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const path = history?.location?.pathname;
  const idToken = getToken();

  return (
    <Router history={history}>
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        <PublicRoute exact path="/forget" component={Forget} />
        <PublicRoute exact path="/resetpassowrd" component={Reset} />
        <PublicRoute exact path="/verifyotp" component={Verify} />
        {/* <PublicRoute exact path={ROUTES?.LOGIN} component={Login} /> */}
        <PublicRoute exact path={ROUTES?.SIGNUP} component={Register} />
        <PublicRoute exact path="/oAuth" component={Oauth} />

        {/* MAKE IT PRIVATE WHEN AUTHENTICATION API DONE */}
        <PublicRoute path={ROUTES?.MAIN} component={App} />
        <PublicRoute path="*" component={Error404} />
      </Switch>
    </Router>
  );
};
export default Routes;
