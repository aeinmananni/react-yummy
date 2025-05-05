import quiz from '../../../icons/quiz_3874176.png';
import Image from '../../../../../../custom/img';

export default function Header() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Image src={quiz} alt="quize" width={100} height={100} />
      <span className="text-white font-bold text-3xl">REACT QUIZ</span>
    </div>
  );
}
