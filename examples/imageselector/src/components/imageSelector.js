import React from 'react';
import Paper from 'material-ui/Paper';

import WfImageButtons from './imageButtons'

const pageWidth = 500;
const pageHeight = 400;
const itemWidth = 200;
const itemHeight = 200;

const pageStyle = {
  height: pageHeight,
  width: pageWidth,
  margin: 20,
  textAlign: 'left',
  display: 'inline-block',
};


const imageStyle = {
  height: itemHeight,
  width: itemWidth,
  margin: 20,
  textAlign: 'left',
  display: 'inline-block',
};

const buttonStyle = {
  height: itemHeight,
  width: itemWidth,
  margin: 20,
  textAlign: 'left',
  display: 'inline-block',
};

const WfImageSelector = () => (
  <div>
    <Paper style={pageStyle} zDepth={5}>
      <div>
        <Paper style={imageStyle} zDepth={3}>
          Default Image
          and another one here somewhere over three lines
          <img src="images/chilli.jpg" alt="" height={itemHeight} width={itemWidth} />
        </Paper>
        <Paper style={buttonStyle} zDepth={3}>
          <WfImageButtons size={itemWidth} />
        </Paper>
      </div>
    </Paper>
  </div>
);

export default WfImageSelector;