import React from "react";
import { Link } from "react-router-dom";

class QrCode extends React.Component {
  render() {
    return (
      <div>
        <h1>QR Code Scanned, {this.props.name}</h1>
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
