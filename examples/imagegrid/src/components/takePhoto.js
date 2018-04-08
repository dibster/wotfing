import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import { fullWhite } from 'material-ui/styles/colors';

const style = {
  margin: 10,
};

const FlatButtonExampleIcon = () => (
  <div>

    <FlatButton
      label="Take Picture"
      labelPosition="before"
      backgroundColor="#a4c639"
      hoverColor="#8AA62F"
      icon={<ActionAndroid color={fullWhite} />}
      style={style}
    />

  </div>
);

export default FlatButtonExampleIcon;