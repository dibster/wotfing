import React from "react";

class WarningButton extends React.Component {
  render() {
    var handleBottomNav = this.props.handleBottomNav;
    return (
      <div>
        <button onClick={() => handleBottomNav("warning")}>Push me</button>
      </div>
    );
  }
}

export default WarningButton;
