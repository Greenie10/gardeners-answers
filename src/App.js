import React, { Component } from 'react';
import fire from './fire';
import { InstantSearch, Hits, SearchBox } from 'react-instantsearch/dom';
import Highlight from 'react-instantsearch/src/widgets/Highlight';


function Search() {
  return (
    <div className="container">
      <SearchBox translations={{placeholder: 'Search for words'}} />
      <Hits hitComponent={Item}/>
    </div>
  );
}

function Item({hit}) {
  return (
    <div className="hit-name">
      <div>
        <p>
          Q <Highlight attributeName="question" hit={hit} />
        </p>
        </div>
        <div>
        <ul>
          <li>
            Bob's answer: <Highlight attributeName="answers.Bob" hit={hit} />
            <br />
          </li>
          <li>
            Pippa's answer: <Highlight attributeName="answers.Pippa" hit={hit} />
            <br />
          </li>
          <li>
            Chris' answer: <Highlight attributeName="answers.Chris" hit={hit} />
            <br />
          </li>
        </ul>
      </div>
    </div>
  );
};

const Hit = ({hit}) =>
  <div className="hit">
  </div>

const App = () => {
  return (
    <div>
      <h1>Gardeners’ Answers</h1>
      <div className="mainContainer">
        <InstantSearch appId="YNWU87GBPU" apiKey="a43d81159b0ffc8eaf3812af985f5262" indexName="answers">
          <Search />
        </InstantSearch>
      </div>
    </div>
)
}


export default App;
