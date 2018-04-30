import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
// data
import { allTitles } from '../db/jsondb'
const titles = allTitles("freezer");

const nameSelected = (parm) => {
  console.log('Selected Name');
}

const WfItemName = () => (
  <AutoComplete
    floatingLabelText="Name"
    filter={AutoComplete.fuzzyFilter}
    dataSource={titles}
    maxSearchResults={5}
    onNewRequest={e => {
      nameSelected(e)
    }}
  />
);

export default WfItemName;