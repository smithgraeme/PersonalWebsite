import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import FaceIcon from '@material-ui/icons/Face';
import WidgetsIcon from '@material-ui/icons/Widgets';

export const mainListItems = (
  <div>

    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>


    <ListItem button>
      <ListItemIcon>
        <DesktopMacIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <FaceIcon />
      </ListItemIcon>
      <ListItemText primary="Resume" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <WidgetsIcon />
      </ListItemIcon>
      <ListItemText primary="GitHub" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <CameraAltIcon />
      </ListItemIcon>
      <ListItemText primary="Photography" />
    </ListItem>

  </div>
);
