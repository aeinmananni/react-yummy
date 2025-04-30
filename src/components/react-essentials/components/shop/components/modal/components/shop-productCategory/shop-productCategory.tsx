import Button from '../../../../../../../../custom/button';
import Image from '../../../../../../../../custom/img';
const className = 'bg-black text-white flex justify-center items-center w-7 h-7';

type ShopProductCategoryProps = {
  title: string;
  image: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
};

export default function ShopProductCategory({
  title,
  image,
  count,
  onDecrement,
  onIncrement,
  onRemove
}: ShopProductCategoryProps) {
  return (
    <div className="flex justify-evenly">
      <div className="flex items-center gap-4">
        <Image src={image} alt="aa" width={30} height={30} className=" rounded-sm" />
        <span>{title}</span>
      </div>
      <div className="flex items-center gap-5">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onIncrement();
          }}
          className={className}
        >
          +
        </Button>
        <span className="text-lg">{count}</span>

        <Button
          onClick={(e) => {
            e.stopPropagation();
            onDecrement();
          }}
          className={className}
        >
          -
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="bg-black text-white p-1"
        >
          Remove
        </Button>
      </div>
    </div>
  );
}
