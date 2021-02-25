# react-ant-card
> Card wrapper for ant.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-card
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| padding   | bool   | false    | false   | If ant-card-body should have padding. |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-card/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-card/dist/style.scss";

  // customize your styles:
  $react-ant-card-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntCard from '@jswork/react-ant-card';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-ant-card">
          <ReactAntCard title="道" padding>
            <p>
              道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。
            </p>
            <p>故常无欲，以观其妙，常有欲，以观其徼。</p>
            <p>此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</p>
          </ReactAntCard>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-card/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-card/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-card
[version-url]: https://npmjs.org/package/@jswork/react-ant-card

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-card
[license-url]: https://github.com/afeiship/react-ant-card/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-card
[size-url]: https://github.com/afeiship/react-ant-card/blob/master/dist/react-ant-card.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-card
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-card
