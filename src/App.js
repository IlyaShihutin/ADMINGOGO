import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './helpers/Firebase';
import ColorSwitcher from './components/common/ColorSwitcher';
import { history } from './helpers/history';
import { isMultiColorActive } from './constants/defaultValues';
import { getDirection } from './helpers/Utils';
import { PrivateRoute } from './helpers/PrivateRoute';

const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ './views/app')
);
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/error')
);
const Login = React.lazy(() =>
  import(/* webpackChunkName: "login" */ './views/user/login')
);

class App extends React.Component {
  constructor(props) {
    super(props);
    const direction = getDirection();
    if (direction.isRtl) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }

  render() {

    return (
      <div className="h-100">
          {isMultiColorActive && <ColorSwitcher />}
          <Suspense fallback={<div className="loading" />}>
            <Router history={history}>
              <Switch>
                <Route
                  exact
                  path={`/login`}
                  component={(routeProps) => <Login {...routeProps} />}
                />
                <PrivateRoute
                  path="/"
                  component={(routeProps) => <ViewApp {...routeProps} />}
                />
                <PrivateRoute
                  path="/error"
                  component={(routeProps) => <ViewError {...routeProps} />}
                />

                <Redirect to="/error" />
              </Switch>
            </Router>
          </Suspense>

      </div >
    );
  }
}

const mapStateToProps = () => {
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
