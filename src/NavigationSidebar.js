import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom'

import HomeIcon from '@material-ui/icons/Home';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import FaceIcon from '@material-ui/icons/Face';
import WidgetsIcon from '@material-ui/icons/Widgets';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallMadeIcon from '@material-ui/icons/CallMade';

const sidebarStructure = [
  {
    text: "Home",
    route: "/",
    iconComponent: (<HomeIcon />)
  },
  {
    text: "Projects",
    route: "/projects",
    iconComponent: (<DesktopMacIcon />)
  },
  // {
  //   text: "Resume",
  //   route: "/resume",
  //   iconComponent: (<FaceIcon />)
  // },
  {
    text: "Photography",
    route: "/photography",
    iconComponent: (<CameraAltIcon />)
  },
  {
    text: "Contact",
    route: "/contact",
    iconComponent: (<MailOutlineIcon />)
  },
  {
    text: "GitHub",
    url: "https://github.com/smithgraeme",
    iconComponent: (<WidgetsIcon />),
    externalLink: true,
  },
];

const sidebarComponents = sidebarStructure.map((entry) => {

  const listItem = (
    <>
      <ListItemIcon>
        {entry.iconComponent}
      </ListItemIcon>
      <ListItemText primary={entry.text} />
    </>
);

  if (entry.externalLink){

    return (
      <a href={entry.url} target="_blank" style={{ textDecoration: 'none' }} rel="noopener noreferrer" key={entry.text}>
        <ListItem button>

          {listItem}

          <ListItemIcon>
            <CallMadeIcon />
          </ListItemIcon>

        </ListItem>
      </a>);

  } else {

    return (
      <Link to={entry.route} style={{ textDecoration: 'none' }} key={entry.text}>
        <ListItem button>

          {listItem}

        </ListItem>
      </Link>);

    }
  }
);

function NavigationSidebar() {
  return (<List>
    <div>
      {sidebarComponents}
    </div>
  </List>);
}

export default NavigationSidebar;
