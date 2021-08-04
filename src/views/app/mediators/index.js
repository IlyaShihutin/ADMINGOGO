import React, { Suspense } from 'react';

const Mediators = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
   <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>Mediators</div>
  </Suspense>
);
export default Mediators;
