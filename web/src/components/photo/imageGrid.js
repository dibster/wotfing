import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FlatButtonExampleIcon from './takePhoto'
// db
import { allImages } from '../db/jsondb'
const tilesData = allImages("chilli");

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 200,
    height: 200,
    overflowY: 'auto',
  },
};


/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const WfImageGrid = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={90}
      style={styles.gridList}
    >
      <Subheader>
        <FlatButtonExampleIcon />
        or choose one of these
      </Subheader>
      {tilesData.map((tile) => (
        <GridTile onClick={(e) => {
          alert('Chose Image ' + tile.image)
          console.log(tile);
        }}>
          <img src={tile.image} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default WfImageGrid;