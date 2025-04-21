import { AnnualDateType, InvestmentCalculateType } from '../../../../models';

export const claluteInvestmentResults = (investmentState: InvestmentCalculateType) => {
  const annualData: AnnualDateType[] = [];
  let investmentValue = investmentState.initialInvestment;
  for (let i = 0; i < investmentState.Duration; i++) {
    const interestEarnedInYear = investmentValue * (investmentState.ExpectedReturn / 100);
    investmentValue += interestEarnedInYear + investmentState.AnnualInvestment;
    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: investmentState.AnnualInvestment
    });
  }
  return annualData;
};
