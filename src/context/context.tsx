/* eslint-disable react-refresh/only-export-components */
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import {
  InvestmentCalculateType,
  NewTodoType,
  ProductPurPurchaseType,
  DropDownType,
  ExpenseFormTypes
} from '../models';
import { WithCoordinates } from '../components/react-essentials/components/picture/utils/location';
type Player = 'X' | 'O';

type GameTurnsType = {
  squre: { row: number; col: number };
  player: Player;
};

type MonthData = {
  name: string;
  incomes: { income: number };
};

type YearData = {
  year: number;
  months: MonthData[];
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
  projectsInfo: NewTodoType | null;
  setProjectsInfo: Dispatch<SetStateAction<NewTodoType | null>>;
  productPurchase: ProductPurPurchaseType[];
  setProductPurchase: Dispatch<SetStateAction<ProductPurPurchaseType[]>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  selectedPicture: WithCoordinates[];
  setSelectedPicture: Dispatch<SetStateAction<WithCoordinates[]>>;
  pictureModal: { id: number } | null;
  setPictureModal: Dispatch<SetStateAction<{ id: number } | null>>;
  dropDownInfo: DropDownType;
  setDropDownInfo: Dispatch<SetStateAction<DropDownType>>;
  EXPENSE_ITEMS: ExpenseFormTypes[];
  SET_EXPENSE_ITEMS: Dispatch<SetStateAction<ExpenseFormTypes[]>>;
  ALL_YEARS_DATA: YearData[];
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

  const [projectsInfo, setProjectsInfo] = useState<NewTodoType | null>(null);
  const [productPurchase, setProductPurchase] = useState<ProductPurPurchaseType[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedPicture, setSelectedPicture] = useState<WithCoordinates[]>([]);
  const [pictureModal, setPictureModal] = useState<{ id: number } | null>(null);
  const date = new Date();
  const [dropDownInfo, setDropDownInfo] = useState<DropDownType>({
    show: false,
    year: date.getFullYear()
  });
  const [EXPENSE_ITEMS, SET_EXPENSE_ITEMS] = useState<ExpenseFormTypes[]>([
    // ---- 2020 ----
    { id: 1, date: '2020/1/10', title: 'Rent', amount: 500 },
    { id: 2, date: '2020/2/15', title: 'Internet', amount: 50 },
    { id: 3, date: '2020/3/10', title: 'New Phone', amount: 600 },
    { id: 4, date: '2020/4/5', title: 'Dinner', amount: 80 },
    { id: 5, date: '2020/5/20', title: 'Gifts', amount: 150 },
    { id: 6, date: '2020/6/30', title: 'Transport', amount: 60 },
    { id: 7, date: '2020/7/25', title: 'Books', amount: 90 },
    { id: 8, date: '2020/8/12', title: 'Movies', amount: 40 },
    { id: 9, date: '2020/9/17', title: 'Coffee', amount: 25 },
    { id: 10, date: '2020/10/10', title: 'Clothes', amount: 200 },
    { id: 11, date: '2020/11/22', title: 'Utilities', amount: 100 },
    { id: 12, date: '2020/12/31', title: 'New Year Party', amount: 300 },

    // ---- 2021 ----
    { id: 13, date: '2021/1/8', title: 'Gym', amount: 60 },
    { id: 14, date: '2021/2/14', title: 'Valentine Gift', amount: 120 },
    { id: 15, date: '2021/3/12', title: 'Concert', amount: 90 },
    { id: 16, date: '2021/4/9', title: 'Subscription', amount: 15 },
    { id: 17, date: '2021/5/3', title: 'Taxi', amount: 35 },
    { id: 18, date: '2021/6/20', title: 'Dinner', amount: 75 },
    { id: 19, date: '2021/7/1', title: 'Books', amount: 50 },
    { id: 20, date: '2021/8/12', title: 'New Tv', amount: 300 },
    { id: 21, date: '2021/9/29', title: 'Spa', amount: 100 },
    { id: 22, date: '2021/10/5', title: 'Tools', amount: 60 },
    { id: 23, date: '2021/11/18', title: 'Donation', amount: 40 },
    { id: 24, date: '2021/12/5', title: 'Shoes', amount: 130 },

    // ---- 2022 ----
    { id: 25, date: '2022/1/5', title: 'Groceries', amount: 120 },
    { id: 26, date: '2022/2/14', title: 'Dinner', amount: 90 },
    { id: 27, date: '2022/3/22', title: 'Trip', amount: 700 },
    { id: 28, date: '2022/4/19', title: 'Air Fryer', amount: 220 },
    { id: 29, date: '2022/5/11', title: 'Gaming', amount: 300 },
    { id: 30, date: '2022/6/30', title: 'Training', amount: 100 },
    { id: 31, date: '2022/7/8', title: 'Camping Gear', amount: 180 },
    { id: 32, date: '2022/8/16', title: 'Classes', amount: 150 },
    { id: 33, date: '2022/9/7', title: 'Desk Lamp', amount: 45 },
    { id: 34, date: '2022/10/13', title: 'Cleaning', amount: 60 },
    { id: 35, date: '2022/11/9', title: 'Gadgets', amount: 400 },
    { id: 36, date: '2022/12/28', title: 'Concert', amount: 90 },

    // ---- 2023 ----
    { id: 37, date: '2023/1/2', title: 'Rent', amount: 550 },
    { id: 38, date: '2023/2/22', title: 'Insurance', amount: 130 },
    { id: 39, date: '2023/3/15', title: 'Camera', amount: 750 },
    { id: 40, date: '2023/4/9', title: 'Kids', amount: 60 },
    { id: 41, date: '2023/5/5', title: 'Fitness', amount: 90 },
    { id: 42, date: '2023/6/19', title: 'Snacks', amount: 35 },
    { id: 43, date: '2023/7/30', title: 'Sunglasses', amount: 110 },
    { id: 44, date: '2023/8/11', title: 'Backpack', amount: 80 },
    { id: 45, date: '2023/9/23', title: 'Dining', amount: 170 },
    { id: 46, date: '2023/10/14', title: 'Art Supplies', amount: 90 },
    { id: 47, date: '2023/11/22', title: 'Laptop', amount: 1200 },
    { id: 48, date: '2023/12/25', title: 'Gift', amount: 200 },

    // ---- 2024 ----
    { id: 49, date: '2024/1/3', title: 'Online Course', amount: 250 },
    { id: 50, date: '2024/2/10', title: 'Jacket', amount: 180 },
    { id: 51, date: '2024/3/18', title: 'Taxi', amount: 40 },
    { id: 52, date: '2024/4/27', title: 'Tech', amount: 390 },
    { id: 53, date: '2024/5/3', title: 'Headphones', amount: 250 },
    { id: 54, date: '2024/6/15', title: 'Concert', amount: 100 },
    { id: 55, date: '2024/7/21', title: 'Classes', amount: 120 },
    { id: 56, date: '2024/8/5', title: 'Shoes', amount: 110 },
    { id: 57, date: '2024/9/18', title: 'Watch', amount: 400 },
    { id: 58, date: '2024/10/29', title: 'Party', amount: 170 },
    { id: 59, date: '2024/11/11', title: 'Gift', amount: 90 },
    { id: 60, date: '2024/12/30', title: 'Decorations', amount: 75 },

    // ---- 2025 ----
    { id: 61, date: '2025/1/8', title: 'Gym Membership', amount: 350 },
    { id: 62, date: '2025/2/14', title: 'Chair', amount: 150 },
    { id: 63, date: '2025/3/22', title: 'Dinner', amount: 95 },
    { id: 64, date: '2025/4/7', title: 'House Repair', amount: 500 },
    { id: 65, date: '2025/5/10', title: 'Software', amount: 260 },
    { id: 66, date: '2025/6/25', title: 'Shoes', amount: 150 },
    { id: 67, date: '2025/7/30', title: 'Toys', amount: 130 },
    { id: 68, date: '2025/8/12', title: 'Haircut', amount: 60 },
    { id: 69, date: '2025/9/5', title: 'Taxi', amount: 40 },
    { id: 70, date: '2025/10/18', title: 'Coffee', amount: 30 },
    { id: 71, date: '2025/11/11', title: 'Car Wash', amount: 90 },
    { id: 72, date: '2025/12/28', title: 'Music', amount: 150 }
  ]);
  const [ALL_YEARS_DATA, SET_ALL_YEARS_DATA] = useState<YearData[]>([]);

  function groupExpensesByYearAndMonth(expenses: ExpenseFormTypes[]): YearData[] {
    const result: Record<number, Record<number, number>> = {};

    for (const expense of expenses) {
      const [yearStr, monthStr] = expense.date.split('/');
      const year = parseInt(yearStr);
      const month = parseInt(monthStr);

      if (!result[year]) result[year] = {};
      if (!result[year][month]) result[year][month] = 0;

      result[year][month] += Number(expense.amount);
    }

    const monthNames = [
      '',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    return Object.entries(result).map(([yearStr, monthsObj]) => ({
      year: parseInt(yearStr),
      months: Object.entries(monthsObj).map(([monthStr, totalIncome]) => ({
        name: monthNames[parseInt(monthStr)],
        incomes: { income: totalIncome }
      }))
    }));
  }

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

  useEffect(() => {
    const grouped = groupExpensesByYearAndMonth(EXPENSE_ITEMS);
    SET_ALL_YEARS_DATA(grouped);
  }, [EXPENSE_ITEMS]);

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
        handelChangeInput,
        projectsInfo,
        setProjectsInfo,
        productPurchase,
        setProductPurchase,
        showModal,
        setShowModal,
        selectedPicture,
        setSelectedPicture,
        pictureModal,
        setPictureModal,
        dropDownInfo,
        setDropDownInfo,
        EXPENSE_ITEMS,
        SET_EXPENSE_ITEMS,
        ALL_YEARS_DATA
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
