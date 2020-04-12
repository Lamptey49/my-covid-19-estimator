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
      convertime = Math.trunc(ellapsedTime * 30);
      break;
    case 'weeks':
      convertime = Math.trunc(ellapsedTime * 7);
    // eslint-disable-next-line no-fallthrough
    default:
      convertime = ellapsedTime;
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
const CasesReportedForImpact = impact;
const CasesReportedForSevereImpact = SevereImpact;
const infectionsrequestedtimeimpact = impact.currentlyInfected
* (2 ** Math.floor((InfectionsRequestedTime(input.periodType, input.timeToElapse) / 3)));
const infectionsByRequestedTimesevereimpact = SevereImpact.currentlyInfected
* (2 ** Math.floor((InfectionsRequestedTime(input.periodType, input.timeToElapse) / 3)));
const severcasesbyrequestedtime = Math.floor(0.15 * infectionsrequestedtimeimpact);
const severesevercasesbyrequestestime = Math.floor(0.15 * infectionsByRequestedTimesevereimpact);
const hospitalbedsrequestedbytime = Math.floor(0.35 * input.totalHospitalBeds)
 - severcasesbyrequestedtime;
const severehospitalbedsrequestedbytime = Math.floor(0.35 * input.totalHospitalBeds)
 - severesevercasesbyrequestestime;
const casesforicurequestedtime = Math.floor(0.05 * infectionsrequestedtimeimpact);
const severecasesforicurequestedtime = Math.floor(0.05 * infectionsByRequestedTimesevereimpact);
const casesforventilatorforrequestedtime = Math.floor(0.02 * infectionsrequestedtimeimpact);
const severecasesforventilator = Math.floor(0.02 * infectionsByRequestedTimesevereimpact);
const dollarsinflight = (Math.floor(infectionsrequestedtimeimpact
  * 0.65 * input.region.avgDailyIncomeInUSD) / 30);
const severedollarsinflight = (Math.floor(infectionsByRequestedTimesevereimpact
  * 0.65 * input.region.avgDailyIncomeInUSD) / 30);
const covid19ImpactEstimator = (data) => ({
  data,
  impact: {
    currentlyInfected: CasesReportedForImpact,
    infectionsByRequestedTime: infectionsrequestedtimeimpact,
    severeCaseByRequestedTime: severcasesbyrequestedtime,
    hospitalBedsRequestedByTime: hospitalbedsrequestedbytime,
    casesForICUByRequestedTime: casesforicurequestedtime,
    casesForVentilatorRequestedTime: casesforventilatorforrequestedtime,
    dollarsInFlight: dollarsinflight

  },
  SevereImpact: {
    currentlyInfected: CasesReportedForSevereImpact,
    infectionsByRequestedTime: infectionsByRequestedTimesevereimpact,
    severeCaseByRequestedTime: severesevercasesbyrequestestime,
    hospitalBedsRequestedByTime: severehospitalbedsrequestedbytime,
    casesForICUByRequestedTime: severecasesforicurequestedtime,
    casesForVentitlatorRequestedTime: severecasesforventilator,
    dollarsInFlight: severedollarsinflight
  }
});

covid19ImpactEstimator(input, impact, SevereImpact);

export default covid19ImpactEstimator;
