import React, { Component } from "react";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import FontIcon from "material-ui/FontIcon";
import SvgIconFace from "material-ui/svg-icons/action/face";
import { blue300, indigo900 } from "material-ui/styles/colors";

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap"
  }
};

class WfItemSummary extends Component {
  constructor(props) {
    super(props);
    const handleClick = this.handleClick.bind(this);
  }
  // handle QR Code passed from child scanning component
  handleClick() {
    alert("You clicked the Chip.");
  }
  render() {
    return (
      <div style={styles.wrapper}>
        <Chip onClick={this.handleClick} style={styles.chip}>
          <Avatar src="../../../public/images/dibster.jpg" />
          {this.props.name} This is teh name of the thng
        </Chip>
      </div>
    );
  }
}

export default WfItemSummary;
