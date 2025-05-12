import { Chart } from '../chart';
import { DropDown } from '../drop-down';
export default function Main() {
  return (
    <div className="flex flex-col w-full h-max p-2 gap-6 items-center">
      <div className="w-full flex items-center justify-between">
        <span>filter by years</span>
        <DropDown />
      </div>
      <Chart />
    </div>
  );
}
