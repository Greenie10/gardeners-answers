import React, { Component } from 'react';
import fire from './fire';

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
            </div>)}
        </div>
      </div>;
  }
}

export default App;
