import React from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/svg-icons/navigation/menu";
import FlatButton from "material-ui/FlatButton";
import WfLogin from "../login/Login.js";

function handleLoginTap() {
  console.log("Do Login");
}

function handleTouchTap() {
  alert("onTouchTap triggered on the title component");
}

const styles = {
  title: {
    cursor: "pointer"
  }
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const WfAppBar = () => (
  <div>
    <AppBar
      title={<span style={styles.title}>Wotfing - Freezer</span>}
      onTitleTouchTap={handleTouchTap}
      onRightIconButtonTouchTap={handleLoginTap}
      iconElementLeft={
        <IconButton>
          <IconMenu />
        </IconButton>
      }
      iconElementRight={<FlatButton label="Login" />}
    />
    {/* <WfLogin name="dave" /> */}
  </div>
);

export default WfAppBar;
