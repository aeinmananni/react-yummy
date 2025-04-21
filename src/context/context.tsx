/* eslint-disable react-refresh/only-export-components */
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { InvestmentCalculateType } from '../models';
type Player = 'X' | 'O';

type GameTurnsType = {
  squre: { row: number; col: number };
  player: Player;
};

type ContextType = {
  activePlayer: Player;
  handelSelectSqure: (rowIndex: number, colIndex: number) => void;
  gameTurns: GameTurnsType[];
  setGameTurns: Dispatch<SetStateAction<GameTurnsType[]>>;
  winner: string;
  setWinner: Dispatch<SetStateAction<string>>;
  handelPlayerNameChangs: (symbol: 'X' | 'O', newName: string) => void;
  playersName: Record<'X' | 'O', string>;
  investmentState: InvestmentCalculateType;
  setInvestmentState: Dispatch<SetStateAction<InvestmentCalculateType>>;
  handelChangeInput: (inputIdentyfier: keyof InvestmentCalculateType, newValue: number) => void;
};

const symbolPlayerContext = createContext<ContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const ProviderContext = ({ children }: Props) => {
  const [gameTurns, setGameTurns] = useState<GameTurnsType[]>([]);
  const [winner, setWinner] = useState<string>('');
  const [playersName, setPlayersName] = useState<Record<'X' | 'O', string>>({
    X: 'PLAYER1',
    O: 'PLAYER2'
  });

  const [investmentState, setInvestmentState] = useState<InvestmentCalculateType>({
    initialInvestment: 10000,
    AnnualInvestment: 1200,
    ExpectedReturn: 6,
    Duration: 10
  });

  const driveActivePlayer = (gameTurns: GameTurnsType[]) => {
    let currentPlayer: Player = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O';
    }

    return currentPlayer;
  };

  const activePlayer = driveActivePlayer(gameTurns);
  const handelSelectSqure = (rowIndex: number, colIndex: number) => {
    setGameTurns((prev) => {
      const currentPlayer: Player = driveActivePlayer(gameTurns);
      const updatedTurns = [{ squre: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prev];
      return updatedTurns;
    });
  };

  const handelPlayerNameChangs = (symbol: 'X' | 'O', newName: string) => {
    setPlayersName((prev) => {
      return {
        ...prev,
        [symbol]: newName
      };
    });
  };

  const handelChangeInput = (inputIdentyfier: keyof InvestmentCalculateType, newValue: number) => {
    setInvestmentState((prev) => ({ ...prev, [inputIdentyfier]: newValue }));
  };
  return (
    <symbolPlayerContext.Provider
      value={{
        activePlayer,
        handelSelectSqure,
        gameTurns,
        winner,
        setWinner,
        setGameTurns,
        handelPlayerNameChangs,
        playersName,
        investmentState,
        setInvestmentState,
        handelChangeInput
      }}
    >
      {children}
    </symbolPlayerContext.Provider>
  );
};

export const useReactContext = () => {
  const context = useContext(symbolPlayerContext);
  if (!context) {
    throw new Error('This Context feild!');
  }

  return context;
};
