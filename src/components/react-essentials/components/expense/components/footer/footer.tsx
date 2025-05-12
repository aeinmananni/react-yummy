import { Cart } from './components';

import { useReactContext } from '../../../../../../context/context';
export default function Footer() {
  const { dropDownInfo, EXPENSE_ITEMS } = useReactContext();
  return (
    <div className="w-full grid grid-cols-1 h-96 border overflow-y-auto p-3 gap-2">
      {EXPENSE_ITEMS.filter((it) => it.date.split('/')[0] === dropDownInfo.year.toString()).map((it) => {
        return <Cart key={it.id} {...it} />;
      })}
    </div>
  );
}
