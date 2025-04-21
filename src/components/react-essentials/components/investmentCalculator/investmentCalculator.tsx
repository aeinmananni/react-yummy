import invec from './../../../../../public/images/iii.jpg';
import { UserInput, Results } from './components';

export default function InvestmentCalculator() {
  return (
    <div
      style={{
        backgroundImage: `url(${invec})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
      className=" w-full  rounded-md  flex flex-col relative  min-h-[100vh] items-center gap-7 overflow-hidden"
    >
      <div className="w-full text-center text-5xl text-white">Investment Calculator</div>
      <UserInput />
      <Results />
    </div>
  );
}
