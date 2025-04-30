import { Cart } from '../cart';
import { SHOPPING_LIST } from '../../../../../../data';
import { useReactContext } from '../../../../../../context/context';
export default function Carts() {
  const { setProductPurchase } = useReactContext();
  return (
    <div className="w-full h-full  p-8 gap-5 flex flex-col">
      <span className="text-lg text-yellow-500">Style Meets Comfort – Elevate Your Everyday.</span>
      <div className="w-full h-full grid grid-cols-3   gap-5">
        {SHOPPING_LIST.map((it, index) => (
          <Cart
            key={index}
            {...it}
            onClick={() =>
              setProductPurchase((prev) => {
                const exsistingItem = prev.find((item) => item.id === it.id);
                if (exsistingItem) {
                  return prev.map((item) =>
                    item.id === it.id
                      ? { ...item, count: item.count + 1, price: item.price + it.price }
                      : item
                  );
                } else {
                  return [...prev, { ...it, count: 1 }];
                }
              })
            }
          />
        ))}
      </div>
    </div>
  );
}
