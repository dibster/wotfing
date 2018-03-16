import React, { Component } from "react";
import Paper from "material-ui/Paper";
// Scanner
import WfScanner from "../scanner/scanner";
// Scanner Results
import WfItemSummary from "../itemsummary/itemsummary";
// db
import { thisItem } from "../db/jsondb";

const style = {
  height: 400,
  width: window.innerWidth - 50,
  margin: 20,
  textAlign: "center",
  display: "inline-block"
};

class WfIdentifyItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      message: "Scan QR Code"
    };
    const handleQrCode = this.handleQrCode.bind(this);
  }
  // handle QR Code passed from child scanning component
  handleQrCode(data) {
    console.log("Running parent " + data);
    if (data) {
      // get Qr Code Value
      this.setState({ message: thisItem(data).name });
    }
  }
  render() {
    let handleQrCode = this.handleQrCode;
    return (
      <div>
        <Paper style={style} zDepth={4}>
          {/* <div>QR Scanner Goes Here</div> */}
          <div>
            <WfScanner handleQrCode={handleQrCode.bind(this)} />
            <p>{this.state.message}</p>
            {/* <WfItemSummary /> */}
          </div>
        </Paper>
      </div>
    );
  }
}

export default WfIdentifyItem;