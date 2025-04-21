import Image from '../../../../../../custom/img';
import artIcon from './../../../images/paint-palette_922648.png';

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image src={artIcon} width={100} height={100} />
      <div className="flex flex-col gap-2 items-center">
        <span className="text-white text-3xl">React art</span>
        <p className="text-xl text-slate-400">A community of artists art-loves</p>
      </div>
    </div>
  );
}
