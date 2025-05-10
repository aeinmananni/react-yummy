import cupWorld from '../../../icons/world-cup.png';
import Image from '../../../../../../custom/img';
import { FiRefreshCcw } from 'react-icons/fi';
import goldMedal from '../../../images/gold-medal_738011.png';
type CompletedProps = {
  onClick?: () => void;
  correctCount: number;
  total: number;
};

export default function Completed({ onClick, correctCount, total }: CompletedProps) {
  return (
    <div className="w-1/2  flex flex-col gap-5 items-center bg-indigo-400 animate-fadeInUp p-3 rounded-md ">
      <Image src={cupWorld} width={100} height={100} alt="World Cup" />
      <span className="text-yellow-400 font-bold text-2xl">QUIZE COMPLETED!</span>

      <p className="text-indigo-600 text-2xl font-semibold">
        Correct: {correctCount} / {total}
      </p>
      <div className="flex flex-col items-center gap-1">
        <Image src={goldMedal} width={100} height={100} alt="World Cup" />
        <span> score : {correctCount * 10}</span>
      </div>
      <FiRefreshCcw onClick={onClick} size={40} className="text-yellow-400" cursor={'pointer'} />
    </div>
  );
}
