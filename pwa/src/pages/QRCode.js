import React from "react";
import { Link } from "react-router-dom";

class QrCode extends React.Component {
  qrcode() {
    return "QWE";
  }

  render() {
    return (
      <div>
        <h1>QR Code Scanned is : {this.qrcode()}</h1>
        <div>
          <ul>
            <li>
              <Link to="/edit">Edit Code</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default QrCode;
