import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const WfImageButtons = (props) => (
  <div>
    Or take a Picture
    <FlatButton label="Default" />
    <FlatButton label="Primary" primary={true} />
  </div>
);

export default WfImageButtons;