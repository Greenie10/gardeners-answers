import React from 'react';
// import fire from './fire';
import { InstantSearch } from 'react-instantsearch/dom';


import {Search} from './searcher';

const App = () => {
  return(
   <div>
    <h1>Gardeners’ Answers</h1>
    <div className="main-container">
      <InstantSearch appId="YNWU87GBPU" apiKey="a43d81159b0ffc8eaf3812af985f5262" indexName="answers">
        <Search />
      </InstantSearch>
    </div>
  </div>
  );
};

export default App;
