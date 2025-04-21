import { claluteInvestmentResults } from '../../func';
import { useReactContext } from '../../../../../../context/context';
import { AnnualDateType } from '../../../../../../models';

export default function Results() {
  const { investmentState } = useReactContext();
  const annualData = claluteInvestmentResults(investmentState);

  const col: Record<keyof AnnualDateType, string> = {
    annualInvestment: 'annualInvestment',
    interest: 'interest',
    valueEndOfYear: 'valueEndOfYear',
    year: 'year'
  };
  return (
    <div className=" overflow-y-auto w-2/3 bg-opacity-50 bg-purple-900 backdrop-filter backdrop-blur-md flex justify-center items-start p-2 overflow-x-hidden  ">
      {investmentState.Duration > 0 ? (
        <table className="w-full text-white">
          <thead className="border-b">
            <tr>
              {Object.keys(col).map((it, index) => (
                <th key={index}>{col[it as keyof AnnualDateType]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {annualData.map((item, index) => (
              <tr key={index} className="border">
                {Object.keys(col).map((it, itIndex) => (
                  <td className="text-center border" key={itIndex}>
                    {item[it as keyof AnnualDateType]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-rose-700 font-bold text-xl">Please enter a duration greater than zero</div>
      )}
    </div>
  );
}
