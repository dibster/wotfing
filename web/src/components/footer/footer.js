import React, { Component } from "react";
import FontIcon from "material-ui/FontIcon";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import Paper from "material-ui/Paper";
import IconLocationOn from "material-ui/svg-icons/communication/location-on";

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

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
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Contents"
            icon={nearbyIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Scan"
            icon={nearbyIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Container"
            icon={nearbyIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default WfFooter;