import React from "react";
import { Link } from "react-router-dom";
import { getById } from "./data/db";

class QrCode extends React.Component {
  readCode(code) {
    return getById(code);
  }

  render() {
    return (
      <div>
        {/* QR Code is passed in via the router */}
        <h1>QR Code Scanned is : {this.props.match.params.qrcode}</h1>
        <div>
          QR Code data is :
          {JSON.stringify(this.readCode(this.props.match.params.qrcode))}
        </div>
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
