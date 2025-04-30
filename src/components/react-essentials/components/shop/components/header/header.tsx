import Button from '../../../../../../custom/button';
import Image from '../../../../../../custom/img';
import trollyIcon from '../../../icons/trolley_9019268.png';
import woman from '../../../images/woman.jpg';
import { useReactContext } from '../../../../../../context/context';
export default function Header() {
  const { productPurchase, setShowModal } = useReactContext();

  const Reduce = () => {
    return productPurchase.reduce((acc, value) => {
      return acc + value.count;
    }, 0);
  };
  return (
    <div className="w-full flex items-center justify-between p-1">
      <div className="flex items-center gap-2">
        <Image src={woman} alt="Trolly" width={80} height={80} className="rounded-full" />
        <span className="keremColor text-2xl">ELEGANT CONTEXT</span>
      </div>
      <Button
        onClick={() => setShowModal(true)}
        className="p-1 rounded-md kremBackground flex items-center gap-2"
      >
        <Image src={trollyIcon} alt="Trolly" width={30} height={30} />
        <span className="text-orange-950 text-sm">Number of purchase cards</span>
        <span>({Reduce()})</span>
      </Button>
    </div>
  );
}
