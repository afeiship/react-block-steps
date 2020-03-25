import ReactAntCard from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app-container">
        <ReactAntCard title="道1" padding>
          <p>道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。</p>
          <p>故常无欲，以观其妙，常有欲，以观其徼。</p>
          <p>此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</p>
        </ReactAntCard>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
