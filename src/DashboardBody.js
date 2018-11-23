//handles rendering the main body section of the "dashboard" parts of the website

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Photography from './pages/Photography'
import Contact from './pages/Contact'

import { Route } from 'react-router-dom'

const styles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  }
});

function DashboardMain(props) {
  const { classes } = props;

  console.log(JSON.stringify(process.env));

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />

      <Route path="/" component={Home} exact/>
      <Route path="/projects" component={Projects}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/photography" component={Photography}/>
      <Route path="/contact" component={Contact}/>

    </main>
  );
}

export default withStyles(styles)(DashboardMain);
