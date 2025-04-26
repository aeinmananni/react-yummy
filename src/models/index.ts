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