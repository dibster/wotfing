import React, { Component } from "react";

import FontIcon from "material-ui/FontIcon";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import Paper from "material-ui/Paper";
import IconLocationOn from "material-ui/svg-icons/communication/location-on";
import IconContents from "material-ui/svg-icons/device/widgets";
import IconCamera from "material-ui/svg-icons/image/camera-alt";
import IconView from "material-ui/svg-icons/action/search";

// all icons here https://material.io/icons/#ic_widgets

const recentsIcon = <FontIcon className="material-icons">widgets</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;
const contentsIcon = <IconContents />;
const cameraIcon = <IconCamera />;
const viewIcon = <IconView />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class WfFooter extends Component {
  state = {
    selectedIndex: 0
  };

  select = index => this.setState({ selectedIndex: index });

  render() {
    let handleBottomNav = this.props.handleBottomNav;
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="All"
            icon={contentsIcon}
            onClick={() => handleBottomNav("contents")}
          />

          <BottomNavigationItem
            label="New"
            icon={cameraIcon}
            onClick={() => handleBottomNav("checkCode")}
          />
          <BottomNavigationItem
            label="Show"
            icon={viewIcon}
            onClick={() => handleBottomNav("findItemForCode")}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default WfFooter;
