export interface CountryStatisticInfo {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  country: string;
  continent: string;
  countryInfo: {
    lat: number;
    long: number;
    flag: string;
  };
}
