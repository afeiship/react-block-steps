import ReactBlockSteps from '@jswork/react-block-steps/src';
import '@jswork/react-block-steps/src/style.scss';

function App() {
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <h1>react-block-steps</h1>
      <div className="y-3">
        <ReactBlockSteps value={1} activeClassName="!bg-red-600 text-white"
                         itemClassName="rounded-full fcc bg-red-300 size-5 text-xs" className="fcc x-2 bg-gray-200" />
        <ReactBlockSteps value={2} activeClassName="!bg-red-600 text-white"
                         itemClassName="rounded-full fcc bg-red-300 size-5 text-xs" className="fcc x-2 bg-gray-200" />
        <ReactBlockSteps value={10} activeClassName="!bg-red-600 text-white"
                         itemClassName="rounded-full fcc bg-red-300 size-5 text-xs" className="fcc x-2 bg-gray-200" />
      </div>
      <button className="btn btn-info">Button</button>
    </div>
  );
}

export default App;
