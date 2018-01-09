import React from 'react';
import { Hits, SearchBox } from 'react-instantsearch/dom';
import Highlight from 'react-instantsearch/src/widgets/Highlight';

function Search() {
  return (
    <div className="search-container">
      <SearchBox translations={{ placeholder: 'Search for words' }} />
      <Hits hitComponent={Item} />
    </div>
  );
}

function Item({ hit }) {
  return (
    <div className="hit-name">
      <h2>
        Q <Highlight attributeName="question-nub" hit={hit} />
      </h2>
      <p className="answers">
        <Highlight attributeName="answers" separator={<hr />} hit={hit} />
      </p>
    </div>
  );
}

export {
  Search,
  Item
};