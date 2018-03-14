import React, { Component } from "react";
import QrReader from "react-qr-reader";

class WfScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: "Scanning QR Code"
    };
    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(data) {
    if (data) {
      console.log(this.props);
      this.props.handleQrCode(data);
      this.setState({
        result: data
      });
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
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default WfScanner;
