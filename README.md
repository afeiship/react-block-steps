# react-block-steps
> Block steps for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-block-steps
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-block-steps/dist/style.css";

  // or use sass
  @import "~@jswork/react-block-steps/dist/style.scss";
  ```
2. import js
  ```js
  import ReactBlockSteps from '@jswork/react-block-steps';
  import '@jswork/react-block-steps/dist/style.scss';
  import { useState } from 'react';

  function App() {
    const [num, setNum] = useState(1);
    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <h1>react-block-steps</h1>
        <div className="y-3 w-50 border p-2 rounded-lg bg-white mx-auto">
          <input type="number" className="input input-bordered" value={num}
                 onChange={(e) => setNum(parseInt(e.target.value))} />
          <ReactBlockSteps
            className="x-2 fcc"
            value={num}
            activatedSection={<span className="bg-red-500 size-4 rounded-full" />}
            deactivatedSection={<span className="bg-red-100 size-4 rounded-full" />}
            size={5}
          />
          <hr />
          <ReactBlockSteps
            className="x-2 fcc"
            value={num}
            activatedSection={<span className="bg-blue-500 w-10 h-2" />}
            deactivatedSection={<span className="bg-blue-100 w-10 h-2" />}
            size={5}
          />
        </div>
      </div>
    );
  }

  export default App;
  ```

## preview
- https://afeiship.github.io/react-block-steps/

## license
Code released under [the MIT license](https://github.com/afeiship/react-block-steps/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-block-steps
[version-url]: https://npmjs.org/package/@jswork/react-block-steps

[license-image]: https://img.shields.io/npm/l/@jswork/react-block-steps
[license-url]: https://github.com/afeiship/react-block-steps/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-block-steps
[size-url]: https://github.com/afeiship/react-block-steps/blob/master/dist/react-block-steps.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-block-steps
[download-url]: https://www.npmjs.com/package/@jswork/react-block-steps
