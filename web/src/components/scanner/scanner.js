import React, { Component } from "react";
import QrReader from "react-qr-reader";

class WfScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300
      // message: "Point at QR Code"
    };
    this.handleScan = this.handleScan.bind(this);
  }
  // when QR Code detected call parent function to handle it
  handleScan(data) {
    if (data) {
      alert(data)
    }
  }

  handleError(err) {
    console.error(err);
  }
  render() {
    let handleQrCode = this.props.HandleQrCode;
    return (
      <div>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
        />
      </div>
    );
  }
}

export default WfScanner;
