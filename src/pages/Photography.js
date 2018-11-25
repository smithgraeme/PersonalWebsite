import React from 'react';
import axios from 'axios'
import xmlParser from 'fast-xml-parser'

import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  main: {
  },
  image: {
    "max-width": "98%",
    margin: 10,
  },
  paper: {
    margin: "10px auto",
    "text-align": "center",
    maxWidth: 1024
  },
  title: {
    "text-align": "center",
    flexGrow: 1,
    fontWeight: "bold",
  }
});

class Photography extends React.Component {
  constructor(props) {
    super(props);

    this.getImageComponent = this.getImageComponent.bind(this);

    this.state =
    {
      images: [],
      loaded: false
    }
  }

  async componentDidMount(){
    console.log("photography mounted");

    const result = await axios.get(process.env.REACT_APP_ContentBase + "")

    //console.log(result.data);

    var jsonObj = xmlParser.parse(result.data);

    //console.log(JSON.stringify(jsonObj,null,2));
    //console.log(jsonObj.ListBucketResult.Contents);

    var images = [];

    for (const image of jsonObj.ListBucketResult.Contents){
      //console.log(image);

      if (image.Key.startsWith("photography/")) {
        images.push(process.env.REACT_APP_ContentBase + image.Key);
      }
    }

    console.log(images);

    this.setState({
      images: images,
      loaded: true
    })
  }

  render() {
    if (!this.state.loaded) {

      return <LinearProgress />;

    }else {

      const images = this.state.images.map(this.getImageComponent);

      return (
        <div className={this.props.classes.main}>
          <Typography
            variant="h4"
            noWrap
            className={this.props.classes.title}
            gutterBottom
          >
            Photography
          </Typography>
          {images}
        </div>);
    }
  }

  getImageComponent(url) {
    const {classes} = this.props;

    return (
      <Card className={classes.paper} key={url} >
        <div>
          <img src={url} alt="Photography blog entry" className={classes.image}/>
        </div>
      </Card>
    );
  }
};

export default withStyles(styles)(Photography);
