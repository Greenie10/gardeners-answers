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
        <p>
          Q <Highlight attributeName="question" hit={hit} />
        </p>
        <div className="answers">
          <Highlight attributeName="answers" separator={<br />} hit={hit} />
        </div>
  </div>
  );
};

const Hit = ({hit}) =>
  <div className="hit">
  </div>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }; // <- set up react state
  }
  componentWillMount() {
    /* Create reference to data in Firebase Database */
    let dataRef = fire
      .database()
      .ref('data')
      .orderByKey()
      .limitToLast(100);
    dataRef.on('child_added', this.dataReadFromName);
  }

  dataReadFromName = snapshot => {
    /* Update React state when gardener is added at Firebase Database */
    let entry = {
      content: snapshot.val(),
      id: snapshot.key,
    };
    this.setState({
      data: [entry].concat(this.state.data),
    });
  };

  render() {
    return <div>
    <h1>Gardeners’ Answers</h1>
    <div className="mainContainer">
      <InstantSearch appId="YNWU87GBPU" apiKey="a43d81159b0ffc8eaf3812af985f5262" indexName="answers">
        <Search />
      </InstantSearch>
      <hr />

    
    {this.state.data.map(entry => <div key={entry.id}>
      <div>
        <p>Q {entry.content.question}</p>
      </div>
      <div>
        <ul>
          {Object.entries(entry.content.answers).map(answer => (
            <li key={answer[0]}>
              <span className="panellistName">{answer[0]}</span>{' '}
              &mdash; {answer[1]}
            </li>
          ))}
        </ul>
      </div>
    </div>
    )}
    </div>
  </div>;
  }
}

export default App;
