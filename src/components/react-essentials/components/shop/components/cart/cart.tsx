import Button from '../../../../../../custom/button';
import Image from '../../../../../../custom/img';

type CartProps = {
  id: number;
  title: string;
  exp: string;
  image: string;
  price: number;
  onClick?: () => void;
};

export default function Cart({ image, title, exp, onClick, price }: CartProps) {
  return (
    <div className="h-max  flex flex-col rounded-md gap-3 kremBackground">
      <Image src={image} alt="shot1" width={400} height={400} className="object-cover" />
      <div className="flex flex-col gap-4 p-2 text-orange-900">
        <span className="font-bold text-xl">{title}</span>
        <span>{exp}</span>
        <div className="flex justify-between items-center">
          <span className="text-yellow-500 font-bold text-xl">{price}$</span>
          <Button onClick={onClick} className="bg-orange-900 keremColor p-2">
            purchase cards
          </Button>
        </div>
      </div>
    </div>
  );
}
