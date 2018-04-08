import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FlatButtonExampleIcon from './takePhoto'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'images/chilli.jpg'
  },
  {
    img: 'images/chilli.jpg',
    author: 'jill111',
  },
  {
    img: 'images/chilli.jpg',
    title: ' ',
    author: ' ',
  },
  {
    img: 'images/chilli.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/chilli.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/chilli.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/chilli.jpg',
    title: 'Breakfast',
    author: 'jill111',
  }

];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const WfImageGrid = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>
        <FlatButtonExampleIcon />
        or choose one of these
      </Subheader>
      {tilesData.map((tile) => (
        <GridTile onClick={(e) => {
          alert('Chose Image ' + tile.img)
          console.log(tile);
        }}>
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default WfImageGrid;