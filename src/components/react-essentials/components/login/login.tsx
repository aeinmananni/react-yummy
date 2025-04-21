import { Header, Inputs } from './components';
import images from './../../components/images/digital-art-style-illustration-fashion-designer.jpg';
export default function Login() {
  return (
    <div
      style={{
        backgroundImage: `url(${images})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
      className=" w-full  rounded-md  flex flex-col items-end relative  min-h-[80vh]  gap-7 overflow-hidden"
    >
      <div className="w-[45%] flex flex-col bg-purple-950/45 backdrop-filter backdrop-blur-sm p-8 gap-12 h-full">
        <Header />
        <Inputs />
      </div>
    </div>
  );
}
