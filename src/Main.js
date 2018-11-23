//This component exists so we can route to pages that DON'T display within the "dashboard layout"

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ViewFunPicture from './ViewFunPicture'
import Dashboard from './Dashboard'

//commentary on the state of web development:
//if you aren't familiar with modern JS or React, the rest of this file probably
//looks like an incredibly bizarre bit of code

export default () => (
  <Router>
    <Switch>
      <Route path="/viewFunPicture" component={ViewFunPicture} />
      <Route path="/" component={Dashboard} />
    </Switch>
  </Router>
)
