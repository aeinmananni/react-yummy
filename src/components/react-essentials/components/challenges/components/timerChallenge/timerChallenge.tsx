import { Cart } from './components';
import { CHALLENGE_CART_ITEMS } from '../../../../../../data';
export default function TimerChallenge() {
  return (
    <div className="w-2/3 h-full  flex justify-between flex-wrap p-2 overflow-y-auto">
      {CHALLENGE_CART_ITEMS.map((it, index) => (
        <Cart key={index} title={it.title} targetTime={it.targetTime} />
      ))}
    </div>
  );
}
