import Button from '../../../../../../../../custom/button';
import { useExtractDatePart } from '../../../../../../../../hooks/useExtractDatePart';

type CartProps = {
  date: string;
  title: string;
  amount: number;
};

export default function Cart({ amount, date, title }: CartProps) {
  const { day, month, year } = useExtractDatePart(date);
  return (
    <div className="w-full h-32 bg-slate-500 rounded-lg shadow-xl flex justify-between">
      <div className="flex items-center w-full  gap-5">
        <div className="border rounded-lg bg-slate-900 w-1/5 h-full flex flex-col gap-2 items-center justify-center">
          <span className="text-xl">{month}</span>
          <span className="text-lg">{year}</span>
          <span className="text-lg">{day}</span>
        </div>
        <span className="text-2xl">{title}</span>
      </div>
      <Button className="bg-slate-900 rounded-lg text-white w-1/6 text-2xl border truncate">{amount}$</Button>
    </div>
  );
}
