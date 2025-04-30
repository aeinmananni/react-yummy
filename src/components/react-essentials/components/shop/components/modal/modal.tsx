import { useReactContext } from '../../../../../../context/context';
import { ModalInfoMation, ShopProductCategory } from './components';

export default function Modal() {
  const { showModal, setShowModal } = useReactContext();
  const { productPurchase, setProductPurchase } = useReactContext();

  const handelRemove = (id: number) => {
    setProductPurchase((prev) => prev.filter((it) => it.id !== id));
  };

  const handelIncrese = (id: number) => {
    setProductPurchase((prev) =>
      prev.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item))
    );
  };

  const handelDecrement = (id: number) => {
    setProductPurchase((prev) =>
      prev.map((item) => (item.id === id ? { ...item, count: item.count > 1 ? item.count - 1 : 1 } : item))
    );
  };

  return (
    <div
      onClick={() => setShowModal(false)}
      className={`${
        showModal ? 'opacity-100 z-10' : 'opacity-0 -z-10'
      } absolute w-full h-full top-0 left-0 bg-orange-950/70 flex justify-center  duration-300`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-1/2 kremBackground h-max justify-between my-56 rounded-md flex flex-col gap-5 p-3 ${
          showModal ? 'translate-y-7 opacity-100 delay-150' : '-translate-y-7 opacity-0'
        } duration-300 `}
      >
        <ModalInfoMation>
          {productPurchase.length > 0 && (
            <>
              {productPurchase.map((it, index) => (
                <ShopProductCategory
                  key={index}
                  {...it}
                  onDecrement={() => handelDecrement(it.id)}
                  onIncrement={() => handelIncrese(it.id)}
                  onRemove={() => handelRemove(it.id)}
                />
              ))}
            </>
          )}
        </ModalInfoMation>
      </div>
    </div>
  );
}
