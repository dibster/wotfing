import React from "react";
import { profile } from "./utils/user";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>USER PROFILE PAGE</h1>
        {JSON.stringify(profile("12345"))}
      </div>
    );
  }
}

export default Profile;
