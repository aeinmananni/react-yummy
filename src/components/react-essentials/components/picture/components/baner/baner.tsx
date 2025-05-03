import paint from '../../../images/paint-palette_922648.png';
import Image from '../../../../../../custom/img';
export default function Baner() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full  p-2">
      <Image src={paint} alt="picture" width={80} height={80} />
      <span className="text-white text-5xl font-semibold">PLACEPICKER</span>
      <div className="flex flex-col gap-2 w-full justify-center items-center text-slate-100">
        <span>Create your persolnal collection of Places your would</span>
        <span>like to visit or you have visited</span>
      </div>
    </div>
  );
}
