import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import GitHub from './pages/GitHub'
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

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />

      <Route path="/" component={Home} exact/>
      <Route path="/projects" component={Projects}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/github" component={GitHub}/>
      <Route path="/photography" component={Photography}/>
      <Route path="/contact" component={Contact}/>

    </main>
  );
}

export default withStyles(styles)(DashboardMain);
