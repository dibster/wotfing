import React from "react";

class WarningButton extends React.Component {
  render() {
    var handleBottomNav = this.props.handleBottomNav;
    return (
      <div>
        <div>
          <button onClick={() => handleBottomNav("warning")}>Warning</button>
        </div>
        <div>
          <button onClick={() => handleBottomNav("info")}>Info</button>
        </div>
        <div>
          <button onClick={() => handleBottomNav("error")}>Error</button>
        </div>
      </div>
    );
  }
}

export default WarningButton;
