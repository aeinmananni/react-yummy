import Input from '../../../../../../custom/input';
import { useReactContext } from '../../../../../../context/context';
export default function UserInput() {
  const { handelChangeInput, investmentState } = useReactContext();

  return (
    <div className="w-1/2 bg-opacity-50 bg-purple-900 backdrop-filter backdrop-blur-md rounded-md grid grid-cols-2 gap-3 p-4 shadow-2xl">
      <Input
        className="InputStyles"
        value={investmentState.initialInvestment}
        label="Initial Investment"
        type="number"
        required
        onChange={(e) => handelChangeInput('initialInvestment', +e.target.value)}
      />
      <Input
        className="InputStyles"
        value={investmentState.ExpectedReturn}
        label="Expected Return"
        type="number"
        required
        onChange={(e) => handelChangeInput('ExpectedReturn', +e.target.value)}
      />
      <Input
        className="InputStyles"
        value={investmentState.AnnualInvestment}
        label="Annual Investment"
        type="number"
        required
        onChange={(e) => handelChangeInput('AnnualInvestment', +e.target.value)}
      />
      <Input
        className="InputStyles"
        label="Duration"
        type="number"
        required
        value={investmentState.Duration}
        onChange={(e) => handelChangeInput('Duration', +e.target.value)}
      />
    </div>
  );
}
