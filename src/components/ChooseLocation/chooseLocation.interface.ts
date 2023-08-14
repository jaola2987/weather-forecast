export interface ICities {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  population: number;
  is_capital: boolean;
}

export interface ICountry {
  gdp: number;
  sex_ratio: number;
  surface_area: number;
  life_expectancy_male: number;
  unemployment: number;
  imports: number;
  homicide_rate?: number;
  currency: Currency;
  iso2: string;
  employment_services: number;
  employment_industry: number;
  urban_population_growth: number;
  secondary_school_enrollment_female?: number;
  employment_agriculture: number;
  capital: string;
  co2_emissions?: number;
  forested_area: number;
  tourists?: number;
  exports: number;
  life_expectancy_female: number;
  post_secondary_enrollment_female?: number;
  post_secondary_enrollment_male?: number;
  primary_school_enrollment_female?: number;
  infant_mortality: number;
  gdp_growth: number;
  threatened_species: number;
  population: number;
  urban_population: number;
  secondary_school_enrollment_male?: number;
  name: string;
  pop_growth: number;
  region: string;
  pop_density: number;
  internet_users: number;
  gdp_per_capita: number;
  fertility: number;
  refugees?: number;
  primary_school_enrollment_male?: number;
}

export interface Currency {
  code: string;
  name: string;
}
