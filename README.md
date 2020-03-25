# react-ant-card
> Card wrapper for ant.

## installation
```shell
npm install -S @feizheng/react-ant-card
```

## update
```shell
npm update @feizheng/react-ant-card
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-card/dist/style.scss";

  // customize your styles:
  $react-ant-card-options: ()
  ```
2. import js
  ```js
  import ReactAntCard from '@feizheng/react-ant-card';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
          <ReactAntCard title="道1">
            <p>道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。</p>
            <p>故常无欲，以观其妙，常有欲，以观其徼。</p>
            <p>此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</p>
          </ReactAntCard>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-card/
