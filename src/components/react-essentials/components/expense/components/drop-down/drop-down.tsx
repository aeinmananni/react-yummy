import { MdFilterAlt } from 'react-icons/md';
import Button from '../../../../../../custom/button';
import { useReactContext } from '../../../../../../context/context';
export default function DropDown() {
  const { dropDownInfo, setDropDownInfo, EXPENSE_ITEMS } = useReactContext();

  const uniqueYears = Array.from(new Set(EXPENSE_ITEMS.map((it) => it.date.split('/')[0])));

  if (!uniqueYears.includes(String(dropDownInfo.year))) {
    uniqueYears.push(String(dropDownInfo.year));
  }

  return (
    <div className="flex item-center justify-center relative w-1/4">
      <Button
        onClick={() => setDropDownInfo((prev) => ({ ...prev, show: !prev.show }))}
        className="p-1 w-full  rounded-md bg-yellow-400 flex justify-between"
      >
        <span>{dropDownInfo.year}</span>
        <MdFilterAlt />
      </Button>

      {dropDownInfo.show && (
        <div className="absolute w-full top-9 left-0 bg-slate-300 rounded-lg flex flex-col items-center p-3 gap-1">
          {uniqueYears.map((year, index) => (
            <Button
              onClick={() => {
                setDropDownInfo((prev) => ({
                  ...prev,
                  year: Number(year),
                  show: false
                }));
              }}
              className="p-1 border w-full min-h-max h-0 text-center hover:-translate-y-1 duration-300 bg-slate-200 cursor-pointer rounded-lg text-yellow-500"
              key={index}
            >
              {year}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
