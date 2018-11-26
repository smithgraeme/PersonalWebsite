import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  section: {
    padding: 20,
    "padding-top": 2,
    margin: 15
  },
  sectionHeader: {
    "padding-top": 8,
  }
});

function Resume(props) {
  const {classes} = props;

  return (<>
    <Section title="Profile">
      <Typography variant="body1" gutterBottom className={classes.body}>
        Integration engineer in the healthcare IT sector with extensive software development experience looking for software developer role. My experience is ~50% customer support/tier 3 support and 50% development and I have over two years of commercial development experience, across multiple languages and technologies, including using a variety of services on Amazon Web Services (AWS).
      </Typography>
    </Section>

    <Section title="Experience">
      <Bullet text="Designed, developed, and supported interfaces to exchange clinical data between PharmacyKeeper and customers’ electronic health record (EHR) systems" />
      <Bullet text="Supported around a hundred (and rapidly growing) client interfaces to facilitate data exchange with all major EHRs" />
      <Bullet text="Designed and developed AWS Lambda based monitoring tool (using JavaScript Node.js, SimpleDB, S3, and SNS) to trigger alerts on error conditions in an existing application component across 15-20 production environments" />
    </Section>

    <Section title="Education">
      <Bullet text="Designed, developed, and supported interfaces to exchange clinical data between PharmacyKeeper and customers’ electronic health record (EHR) systems" />
    </Section>

    <Section title="Skills">
      <Bullet text="Designed, developed, and supported interfaces to exchange clinical data between PharmacyKeeper and customers’ electronic health record (EHR) systems" />
    </Section>

    <Section title="Certifications">
      <Bullet text="Designed, developed, and supported interfaces to exchange clinical data between PharmacyKeeper and customers’ electronic health record (EHR) systems" />
    </Section>

  </>
  );
};

const Section = withStyles(styles)(function({classes, title, children}) {
  return (
    <Paper className={classes.section}>
      <Typography variant="h3" gutterBottom className={classes.sectionHeader}>
        {title}
      </Typography>

      {children}
    </Paper>
  )
})

const Bullet = withStyles(styles)(({text, classes}) => {
  return (
      <Typography variant="body1" gutterBottom className={classes.Bullet}>
        &bull;&nbsp;{text}
      </Typography>
  )
})

export default withStyles(styles)(Resume);
