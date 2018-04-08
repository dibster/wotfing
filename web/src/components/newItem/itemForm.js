import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
// data
import { allTitles } from '../db/jsondb'
const titles = allTitles("freezer");

const WfItemForm = () => (
  <div>
    <br />
    <AutoComplete
      floatingLabelText="What is it ?"
      filter={AutoComplete.fuzzyFilter}
      dataSource={titles}
      maxSearchResults={5}
    />
  </div>
);

export default WfItemForm;