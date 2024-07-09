import ReactBlockSteps from '@jswork/react-block-steps/src';
import '@jswork/react-block-steps/src/style.scss';
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
