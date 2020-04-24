export const FIELD_TYPES = {
	number: 'Number',
	text: 'Text',
	zillowLink: 'Zillow Foreclosures Link',
	wikipediaLink: 'Wikipedia Link',
	subSectionHeader: 'Sub Section Header'
}

export const BLANK_INPUT_FIELD = {
	fieldType: FIELD_TYPES.number,
	fieldName: '',
	fieldDisplayName: '',
}

export const DEFAULT_INPUT_VALUES = [
	// HEADER
	// County Name, State
	// Tract GEOID
	
	// Wikipedia Link
	// Foreclosed Houses on Zillow
	// Contractor Link (if applicable)
	
	// COUNTY LEVEL INDICATORS

// 	Tract Level Indicators
//
// 	Area of Concentrated Poverty
// 	YES/NO' whether designated as an Area of Concentrated Poverty
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'Area of Concentrated Poverty',
		fieldName: 'acp',
	},

// 	Lower Mississippi Delta or Mid-Appalachia region?
// 		Fannie Mae Region Name
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'Lower Missippi Delta or Mid Appalachia',
		fieldName: 'fm_region_flag',
	},

// 	Rural
// 	YES/NO' for Rural
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'Fannie Mae rural',
		fieldName: 'rural',
	},

// 	FHFA Low Income Area
// 	YES/NO' for Low Income Area
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'FHFA low income area',
		fieldName: 'low_income_area',
	},

// 	FHFA Minority Area
// 	YES/NO' for Minority Area
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'FHFA minority area',
		fieldName: 'minority_area',
	},

// 	CRA Eligible
// 	YES/NO' for CRA market (generally assessed based on state or MSA)
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'cra eligible',
		fieldName: 'cra_eligibility',
	},

// 	High Opportunity Zone
// 	YES/NO' for High Opportunity Zone
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'High Opportunity Area',
		fieldName: 'high_opp',
	},

	
	
	
// 	County Level Indicators
	{
		fieldType: FIELD_TYPES.subSectionHeader,
		fieldDisplayName: 'County Level Indicators',
	},

// 	FM Persistent Poverty
// 	YES/NO' for Persistent Poverty
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'Fannie Mae persistent poverty',
		fieldName: 'per_pov',
	},

// 	County Total Population 2017
// 	County level total population 2017
	{
		fieldType: FIELD_TYPES.number,
		fieldDisplayName: 'county total population 2017',
		fieldName: 'county_total_population_2017',
	},

// 	Fannie Mae 100% AMI
// 	County level ami 100

// 	Fannie Mae 80% AMI
// 	County level ami 80

// 	Fannie Mae 50% AMI
// 	County level ami 50

// 	County Median Income 4 Person Household 2017
// 	County level median income 4 person household 2017

// 	County Average Household Size Owner Occupied 2017
// 	County level average household size owner occupied 2017

// 	County Average Household Size Renter Occupied 2017
// 	County level average household size renter occupied 2017

// 	County Median Age Of Owner Occupied Units 2017
// 	County level median age of owner occupied units 2017

// 	County Median Age Of Renter Occupied Units 2017
// 	County level median age of renter occupied units 2017

// 	County Unemployed Pct 2017
// 	County level unemployed pct 2017

// 	County Rental Vacancy Pct 2017
// 	County level rental vacancy pct 2017

// 	County Total Rental Units 2017
// 	County level total rental units 2017

// 	County Largest Industry
// 	County level NAICS description for largest industry

]

const tEMP = [
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'Census Tract ID',
		fieldName: 'geoid_tr',
	},
	
	
	
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'county median income 4 person household 2017',
		fieldName: 'county_median_income_4_person_household_2017',
	},
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'county average household size owner occupied 2017',
		fieldName: 'county_average_household_size_owner_occupied_2017',
	},
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'county average household size renter occupied 2017',
		fieldName: 'county_average_household_size_renter_occupied_2017',
	},
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'county median age of owner occupied units 2017',
		fieldName: 'county_median_age_of_owner_occupied_units_2017',
	},
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'county median age of renter occupied units 2017',
		fieldName: 'county_median_age_of_renter_occupied_units_2017',
	},
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'county gross rent as a pct of income 2017',
		fieldName: 'county_gross_rent_as_a_pct_of_income_2017',
	},
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'county unemployed pct 2017',
		fieldName: 'county_unemployed_pct_2017',
	},
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'county rental vacancy pct 2017',
		fieldName: 'county_rental_vacancy_pct_2017',
	},
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'county total rental units 2017',
		fieldName: 'county_total_rental_units_2017',
	},
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: '% Change in Business Establishments',
		fieldName: 'county_pct_change_in_establishments_2009_15',
	},
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'County Largest Industry',
		fieldName: 'county_naics_description_for_largest_industry',
	},
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'Fannie Mae 100% AMI',
		fieldName: 'county_ami_100',
	},
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'Fannie Mae 80% AMI',
		fieldName: 'county_ami_80',
	},
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'Fannie Mae 50% AMI',
		fieldName: 'county_ami_50',
	},
	{
		fieldType: FIELD_TYPES.text,
		fieldDisplayName: 'stusps',
		fieldName: 'stusps',
	},
]

