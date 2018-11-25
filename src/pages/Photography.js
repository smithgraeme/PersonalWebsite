import React from 'react';
import axios from 'axios'
import xmlParser from 'fast-xml-parser'

import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  image: {
    "max-width": "98%",
    margin: 10
  },
  paper: {
    margin: 10,
    "text-align": "center"
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

      return images;
    }
  }

  getImageComponent(url) {
    const {classes} = this.props;

    return (
      <Paper className={classes.paper} key={url} >
        <div>
          <img src={url} alt="Photography blog entry" className={classes.image}/>
        </div>
      </Paper>
    );
  }
};

export default withStyles(styles)(Photography);
