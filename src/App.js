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
      .startAt('1')
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
    return (
      <div>
        <h3>Show a list of questions and answers</h3>
        <table>
          {/* Render the list of gardeners */
          this.state.data.map(entry => (
            <tr>
              <td>
                {entry.content.question ? 'Question' : ''}{' '}
                {entry.content.Bob ? 'Bob' : ''}
                {entry.content.James ? 'James' : ''}
                {entry.content.Bunny ? 'Bunny' : ''}
              </td>
              <td>{entry.content.text}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
