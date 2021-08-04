import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// const DashboardDefault = React.lazy(() =>
//   import(/* webpackChunkName: "dashboard-default" */ './default')
// );
// const ContentDefault = React.lazy(() =>
//   import(/* webpackChunkName: "dashboard-content" */ './content')
// );
// const AnalyticsDefault = React.lazy(() =>
//   import(/* webpackChunkName: "dashboard-analytics" */ './analytics')
// );
// const EcommerceDefault = React.lazy(() =>
//   import(/* webpackChunkName: "dashboard-ecommerce" */ './ecommerce')
// );

const Profile = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>Profile</div>
    <Switch>
      {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />
      <Route
        path={`${match.url}/default`}
        render={(props) => <DashboardDefault {...props} />}
      />
      */}

      {/* <Redirect to="/error" /> */}
    </Switch>
  </Suspense>
);
export default Profile;
