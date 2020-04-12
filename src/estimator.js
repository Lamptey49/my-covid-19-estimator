/* eslint-disable no-undef */
const input = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 34,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};


const casesReported = (cases, value) => cases * value;
function InfectionsRequestedTime(typeofPeriod, ellapsedTime) {
  const period = typeofPeriod.toLowerCase();
  let convertime;
  switch (period) {
    case 'months':
      convertime = Math.trunc((ellapsedTime / 3) * 30);
      break;
    case 'weeks':
      convertime = Math.trunc((ellapsedTime / 3) * 7);
    // eslint-disable-next-line no-fallthrough
    default:
      convertime = Math.trunc(ellapsedTime / 3);
      break;
  }
  return convertime;
}
const impact = {
  currentlyInfected: casesReported(input.reportedCases, 10)
};

const SevereImpact = {
  currentlyInfected: casesReported(input.reportedCases, 50)
};
const covid19ImpactEstimator = (data) => {
  const CasesReportedForImpact = impact;
  const CasesReportedForSevereImpact = SevereImpact;
  return {
    data,
    impact: {
      currentlyInfected: CasesReportedForImpact,
      infectionsByRequestedTime:
      Math.trunc(impact.currentlyInfected
      * (2 ** (InfectionsRequestedTime(input.periodType, input.timeToElapse))))
      // severeCasesByRequestedTime:
    },
    SevereImpact: {
      currentlyInfected: CasesReportedForSevereImpact,
      infectionsByRequestedTime:
      Math.trunc(SevereImpact.currentlyInfected
      * (2 ** (InfectionsRequestedTime(input.periodType, input.timeToElapse))))
    }
  };
};

console.log(covid19ImpactEstimator(input, impact, SevereImpact));


// export default covid19ImpactEstimator;
