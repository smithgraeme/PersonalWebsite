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
    fontWeight: "bold"
  },
  card: {
    margin: "15px",
    maxWidth: 600,
  },
  media: {
    height: 400,
  },
});

function Projects(props) {
const { classes } = props;

  return (
    <>
      <Typography
        variant="h4"
        noWrap
        className={classes.title}
        gutterBottom
      >
        Projects
      </Typography>

      <Divider />

      <ViewFunPictureCard {...props}/>

      <PersonalWebsiteCard {...props}/>
    </>
  );
}

function ViewFunPictureCard(props) {
  const { classes } = props;

  return (
    <Link to="viewFunPicture" style={{ textDecoration: 'none' }} target="_blank">
      <Card className={classes.card} raised>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://api.graemesmith.info/GetRandomCatPic"
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
      {/* <CardActionArea> */}
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
      {/* </CardActionArea> */}
    </Card>
  );
}

export default withStyles(styles)(Projects);
