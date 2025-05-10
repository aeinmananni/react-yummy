import Button from '../../../../../../../../custom/button';
import { useReactContext } from '../../../../../../../../context/context';
type ModalInfoMationProps = {
  children?: React.ReactNode;
};

export default function ModalInfoMation({ children }: ModalInfoMationProps) {
  const { setShowModal, productPurchase, setProductPurchase } = useReactContext();

  const hadelReduse = () =>
    productPurchase.reduce((acc, value) => {
      return acc + value.price * value.count;
    }, 0);

  return (
    <>
      <div className="flex flex-col gap-3 text-orange-900">
        <span className="text-2xl font-bold">YOUR CART</span>
        {productPurchase.length <= 0 && <span>No Item in Cart!</span>}
      </div>
      <div className=" w-full gap-3 grid grid-cols-1 h-max">{children}</div>
      <div className="flex flex-col items-end w-full gap-2">
        <span className="text-orange-900">Cart Total : ${hadelReduse()}</span>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setShowModal(false)}
            className="bg-orange-900 rounded-md text-white px-3 py-1"
          >
            Close
          </Button>
          <Button
            onClick={() => setProductPurchase([])}
            className={` ${
              productPurchase.length > 0 ? 'bg-orange-900' : 'bg-orange-300'
            }  rounded-md text-white px-3 py-1`}
          >
            Clear All Products
          </Button>
        </div>
      </div>
    </>
  );
}
