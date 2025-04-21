import { ButtonHTMLAttributes, ChangeEvent, InputHTMLAttributes, useState } from 'react';
import Button from '../../../../../../custom/button';
import Input from '../../../../../../custom/input';
import { PlayerStateType } from '../../../../../../models';
import { useReactContext } from '../../../../../../context/context';
type Styles = {
  buttonClassName?: ButtonHTMLAttributes<HTMLButtonElement>['className'];
  symbolClassName?: HTMLSpanElement['className'];
  inputClassName?: InputHTMLAttributes<HTMLInputElement>['className'];
};
type Props = {
  symbol: 'X' | 'O';
  playerName: string;
  styles?: Styles;
  isActive?: boolean;
};

export default function Player({ symbol, playerName, styles, isActive }: Props) {
  const { handelPlayerNameChangs } = useReactContext();
  const [playersState, setPlayerState] = useState<PlayerStateType>({
    inputValue: playerName,
    isEditing: false
  });

  return (
    <div
      className={`flex justify-between  w-full text-white items-center ${
        isActive && 'border-2 border-yellow-400'
      }`}
    >
      <Input
        className={`text-center border-none outline-none w-full h-full bg-transparent duration-300  ${
          playersState.isEditing ? `cursor-pointer ${styles?.inputClassName}` : 'cursor-not-allowed'
        }`}
        value={playersState.inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPlayerState((prev) => ({ ...prev, inputValue: e.target.value }))
        }
        disabled={!playersState.isEditing}
      />
      <div className="flex w-1/3 justify-between items-center  h-full">
        <span
          className={`text-2xl w-full border-l flex justify-center items-center h-full font-bold ${styles?.symbolClassName}`}
        >
          {symbol}
        </span>
        <Button
          onClick={() => {
            setPlayerState((prev) => ({ ...prev, isEditing: !prev.isEditing }));

            handelPlayerNameChangs(symbol, playersState.inputValue);
          }}
          className={` h-full  rounded-sm   w-64 ${styles?.buttonClassName}`}
        >
          {playersState.isEditing ? 'Edit' : 'Save'}
        </Button>
      </div>
    </div>
  );
}
