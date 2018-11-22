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
  {
    text: "Resume",
    route: "/resume",
    iconComponent: (<FaceIcon />)
  },
  {
    text: "GitHub",
    route: "/github",
    iconComponent: (<WidgetsIcon />)
  },
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
];

const sidebarComponents = sidebarStructure.map((entry) =>
(
  <Link to={entry.route} style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        {entry.iconComponent}
      </ListItemIcon>
      <ListItemText primary={entry.text} />
    </ListItem>
  </Link>
)
);

function Sidebar() {
  return (<List>
    <div>
      {sidebarComponents}
    </div>
  </List>);
}

export default Sidebar;
