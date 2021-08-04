import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';
import { PrivateRoute } from '../../helpers/PrivateRoute';

const Profile = React.lazy(() =>
  import(/* webpackChunkName: "profile" */ './profile')
);

const Mediators = React.lazy(() =>
  import(/* webpackChunkName: "mediators" */ './mediators')
);

const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`/`} to={`/profile`} />
            <PrivateRoute
              exact
              path={`/profile`}
              component={(routeProps) => <Profile {...routeProps} />}
            />
            <PrivateRoute
              path={`${match.url}/mediators`}
              component={(routeProps) => <Mediators {...routeProps} />}
            />
            <PrivateRoute
              path={`${match.url}/menu`}
              render={(props) => <Menu {...props} />}
            />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
