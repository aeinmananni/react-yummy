import Image from '../../../../../../custom/img';

type CartProps = {
  image: string;
  onClick?: () => void;
};

export default function Cart({ image, onClick }: CartProps) {
  return (
    <div role="button" onClick={onClick} className="h-40 min-w-64 animate-fadeInUp">
      <Image
        src={image}
        className=" h-full  w-full rounded-lg hover:border-yellow-500 hover:border-2 border-2 border-transparent  duration-300 cursor-pointer hover:scale-105 hover:rotate-2 hover:shadow-md hover:shadow-yellow-200"
      />
    </div>
  );
}
