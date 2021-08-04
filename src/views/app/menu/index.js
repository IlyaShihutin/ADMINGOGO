import React, { Suspense } from 'react';

const UI = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <div>My menu</div>
  </Suspense>
);
export default UI;
