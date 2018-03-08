import React, { Component } from "react";
// router
import {
  BrowserRouter as Redirect,
  Router,
  Route,
  Link
} from "react-router-dom";

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

  handleOnClick = () => {
    // some action...
    console.log("Doing Redirect now");
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      console.log("In redirect");

      return <Link to="/" />;
    }
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Contents"
            icon={nearbyIcon}
            onClick={() => {
              this.handleOnClick();
            }}
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
