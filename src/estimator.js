
const input = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};


const CalcaulateCurrentlyInfected = () => {
  const currently = input.reportedCases * 10;
  return currently;
};
const CalcaulateCurrentlyInfected2 = () => {
  const currently = input.reportedCases * 50;
  return currently;
};
const CalcaulateInfectionsByRequestTime = () => {
  const infections = CalcaulateCurrentlyInfected() * 1024;
  if (input.periodType === 'days') {
    const answer = infections * input.timeToElapse;
    return answer;
  }
  if (input.periodType === 'weeks') {
    const answer = infections * input.timeToElapse * 7;
    return answer;
  }
  if (input.periodType === 'months') {
    const answer = infections * input.timeToElapse * 30;
    return answer;
  }
  return infections;
};
const CalcaulateInfectionsByRequestTime2 = () => {
  const infections = CalcaulateCurrentlyInfected2() * 1024;
  if (input.periodType === 'days') {
    const answer = infections * input.timeToElapse;
    return answer;
  }
  if (input.periodType === 'weeks') {
    const answer = infections * input.timeToElapse * 7;
    return answer;
  }
  if (input.periodType === 'months') {
    const answer = infections * input.timeToElapse * 30;
    return answer;
  }
  return infections;
};
const CalcaulateSeverCasesByRequestedTime = () => {
  const severecase = (0.15 * CalcaulateInfectionsByRequestTime());
  if (input.periodType === 'days') {
    const answer = severecase * input.timeToElapse;
    return answer;
  }
  if (input.periodType === 'weeks') {
    const answer = severecase * input.timeToElapse * 7;
    return answer;
  }
  if (input.periodType === 'months') {
    const answer = severecase * input.timeToElapse * 30;
    return answer;
  }
  return severecase;
};
const CalculateHospitalBeds = () => {
  const hospitalBeds = (input.totalHospitalBeds * 0.35 * 23);
  return hospitalBeds;
};
const CalculateHospitalBeds2 = () => {
  const hospitalBeds = (input.totalHospitalBeds * 0.35 * 23);
  return hospitalBeds;
};
const CalculateCasesForICUByRequestedTime = () => {
  const casesforicu = (0.15 * CalcaulateCurrentlyInfected());
  return casesforicu;
};
const CalculateCasesForICUByRequestedTime2 = () => {
  const casesforicu = (0.15 * CalcaulateCurrentlyInfected2());
  return casesforicu;
};
const CalculateCasesForVentilatorsByRequestedTime = () => {
  const casesforventitlators = (0.2 * CalcaulateCurrentlyInfected());
  return casesforventitlators;
};
const CalculateCasesForVentilatorsByRequestedTime2 = () => {
  const casesforventitlators = (0.2 * CalcaulateCurrentlyInfected());
  return casesforventitlators;
};
const CalculateDollarsInFlight = () => {
  const dollars = (CalcaulateCurrentlyInfected() * (0.65 * 1.5 * 30));
  return dollars;
};
const CalculateDollarsInFlight2 = () => {
  const dollars = (CalcaulateCurrentlyInfected2() * (0.65 * 1.5 * 30));
  return dollars;
};

const impact = {
  currentlyInfected: CalcaulateCurrentlyInfected(),
  infectionsByRequestedTime: CalcaulateInfectionsByRequestTime(),
  severeCasesByRequestedTime: CalcaulateSeverCasesByRequestedTime(),
  hospitalBedsByRequestedTime: CalculateHospitalBeds(),
  casesForICUByRequestedTime: CalculateCasesForICUByRequestedTime(),
  casesForVentilatorsByRequestedTime: CalculateCasesForVentilatorsByRequestedTime(),
  dollarsInFlight: CalculateDollarsInFlight()
};
const SevereImpact = {
  currentlyInfected: CalcaulateCurrentlyInfected2(),
  infectionsByRequestedTime: CalcaulateInfectionsByRequestTime2(),
  severeCasesByRequestedTime: CalcaulateSeverCasesByRequestedTime(),
  hospitalBedsByRequestedTime: CalculateHospitalBeds2(),
  casesForICUByRequestedTime: CalculateCasesForICUByRequestedTime2(),
  casesForVentilatorsByRequestedTime: CalculateCasesForVentilatorsByRequestedTime2(),
  dollarsInFlight: CalculateDollarsInFlight2()

};
const covid19ImpactEstimator = (data) => {
  const input = data;
  return {
    data: input,
    impact: { impact },
    SevereImpact: { SevereImpact }
  };
};
covid19ImpactEstimator(input, impact, SevereImpact);

export default covid19ImpactEstimator;
