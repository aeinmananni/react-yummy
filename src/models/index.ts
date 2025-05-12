export type TabsType = {
  id: number;
  title: string;
  exp: string;
};

export type PlayerStateType = {
  inputValue: string;
  isEditing: boolean;
};

export type InvestmentCalculateType = {
  initialInvestment: number;
  ExpectedReturn: number;
  AnnualInvestment: number;
  Duration: number;
};

export type AnnualDateType = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
};

export type LoginType = {
  email: string;
  password: string;
};


export type ChallengrCartType = {
  id: number;
  title: string;
  targetTime: number;
};

export type NewTodoType = {
  id?: number;
  title: string;
  date: string;
  description: string;
};

export type ProjectsType = {
  selectedProjectId: number | undefined | null;
  projects: NewTodoType[];
};



export type ShoppingType = {
  id: number;
  title: string;
  exp: string;
  image: string;
  price: number;
};

export type ProductPurPurchaseType = Pick<ShoppingType, 'id' | 'image' | 'title' | 'price'> & {
  count: number;
};

export type PictureTypes = {
  id: number;
  lat: number;
  lon: number;
  image: string;
};


export type QuizType = {
  id: string;
  text: string;
  answers: string[];
  correctAnswer: string;
};


export type ExpenseFormTypes = {
  id?: number;
  date: string;
  title: string;
  amount: number;
};

export type MonthsType = {
  id: number;
  name: string;
  incomes: { id: number; income: number };
};

export type IncomeData = {
  id: number;
  income: number;
};

export type MonthIncome = {
  id: number;
  name: string;
  incomes: IncomeData;
};

export type YearlyIncome = {
  year: number;
  months: {
    id: number;
    name: string;
    incomes: {
      id: number;
      income: number;
    };
  }[];
};

export type DropDownType = {
  show: boolean;
  year: number;
};

