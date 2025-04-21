import { FaReact } from 'react-icons/fa';
import { ReactEssentials } from './components';

export default function App() {
  return (
    <>
      <div className="absolute flex flex-col items-center  top-1/4 left-1/6 text-9xl  bg-clip-text text-transparent bg-gradient-to-tr from-purple-900 to-sky-300">
        <FaReact className="text-purple-500" />

        <span>REACT</span>
      </div>
      <ReactEssentials />
    </>
  );
}
