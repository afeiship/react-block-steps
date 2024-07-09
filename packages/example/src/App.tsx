import ReactBlockSteps from '@jswork/react-block-steps/src';
import '@jswork/react-block-steps/src/style.scss';

function App() {
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <h1>react-block-steps</h1>
      <ReactBlockSteps />
      <button className='btn btn-info'>Button</button>
    </div>
  );
}

export default App;
