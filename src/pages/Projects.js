import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  card: {
    margin: "15px",
    maxWidth: 600,
  },
  media: {
    height: 400,
  },
  cryptoPic: {
    "max-width": "100%",
  },
  cryptoCardContent: {
    padding: 0
  },
  cryptoCardContentInnerDiv: {
    padding: 16
  },
  main: {
    "text-align": "center",
  },
  mainInner: {
    display: "inline-block"
  }
});

function Projects(props) {
const { classes } = props;

  return (
    <div className={classes.main}>
      <div className={classes.mainInner}>
        <Typography
          variant="h4"
          noWrap
          className={classes.title}
          gutterBottom
        >
          Projects
        </Typography>

        <Divider />

        <SimpleCryptoPortfolio {...props}/>

        <ViewFunPictureCard {...props}/>

        <PersonalWebsiteCard {...props}/>
      </div>
    </div>
  );
}

function SimpleCryptoPortfolio(props) {
  const { classes } = props;

  return (
    <a
      href="https://simplecryptotracker.net/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <Card className={classes.card} raised>
        <CardActionArea>
          <CardContent className={classes.cryptoCardContent}>
            <img src="https://content.graemesmith.info/cryptoPortfolio.png" alt="Italian Trulli" className={classes.cryptoPic} />
            <div className={classes.cryptoCardContentInnerDiv}>
              <Typography gutterBottom variant="h5" component="h2">
                Simple Crypto Portfolio and API (In Progress)
              </Typography>
              <Typography component="p">
                <a
                  href="https://simplecryptotracker.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >simplecryptotracker.net</a>
                &nbsp; - a cryptocurrency price tracker and backend API for historical coin prices. Uses AWS Lambda and RDS (running a
                MySQL database) to collect coin prices and expose them via an API that returns JSON price data.
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
}

function ViewFunPictureCard(props) {
  const { classes } = props;

  return (
    <Link to="viewFunPicture" style={{ textDecoration: 'none'}} target="_blank">
      <Card className={classes.card} raised>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={process.env.REACT_APP_ApiBase + "getRandomFunPicture"}
            title="View a fun picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              View A Random Fun Picture
            </Typography>
            <Typography component="p">
              Need a little boost of fun? Click above to open a highly convenient page
              that displays a random cat or other fun picture whenever you need it.

              Just refresh to get a new one!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

function PersonalWebsiteCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card} raised>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          This Website
        </Typography>
        <Typography component="p">
          This website is built using React, Material-UI, and React Router, plus some Lambda functions for the backend. It is hosted
          using S3, Route53, and CloudFront.
          <br />
          <br />
          Check out the source code&nbsp;
          <a
            href="https://github.com/smithgraeme/PersonalWebsite"
            target="_blank"
            rel="noopener noreferrer"
          >here on GitHub</a>
          &nbsp;and&nbsp;
          <a
            href="https://gist.github.com/smithgraeme/1bc5985c91140d0f993200d4732b8d7f"
            target="_blank"
            rel="noopener noreferrer"
          >this Gist</a>
          &nbsp;for a convenient serverless React app reference system architecture.

        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(Projects);
