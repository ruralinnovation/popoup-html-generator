export const FIELD_TYPES = {
	scoreOutOf100: 'Score (0 to 100)',
	gradientOutOf100: 'Gradient(0 to 100)',
	number: 'Number',
	text: 'Text'
}

export const BLANK_INPUT_FIELD = {
	fieldType: FIELD_TYPES.number,
	fieldName: '',
	fieldDisplayName: '',
}

export const DEFAULT_INPUT_VALUES = [
	{
		fieldType: FIELD_TYPES.gradientOutOf100,
		fieldName: 'prep_level',
		fieldDisplayName: 'prep_score',
	},
	
	// "Pillar" scores
	{
		fieldType: FIELD_TYPES.scoreOutOf100,
		fieldName: 'bed_score_1',
		fieldDisplayName: 'Physical Capacity score',
	},
	{
		fieldType: FIELD_TYPES.scoreOutOf100,
		fieldName: 'staff_score_1',
		fieldDisplayName: 'Human Resources score',
	},
	{
		fieldType: FIELD_TYPES.scoreOutOf100,
		fieldName: 'dem_score_1',
		fieldDisplayName: 'Demographic score',
	},
	{
		fieldType: FIELD_TYPES.scoreOutOf100,
		fieldName: 'se_score_1',
		fieldDisplayName: 'Socio-Economic score',
	},
	{
		fieldType: FIELD_TYPES.scoreOutOf100,
		fieldName: 'proj_score_1',
		fieldDisplayName: 'COVID-19 score',
	},
	
	// Numeric
	{
		fieldType: FIELD_TYPES.number,
		fieldName: 'total_staff_dt_100k',
		fieldDisplayName: 'Staff w/in 40min per 100k',
	},
	{
		fieldType: FIELD_TYPES.number,
		fieldName: 'total_estimated_bed_40_mins_100k',
		fieldDisplayName: 'BEDS IN 40 MINS PER 100K',
	},
	{
		fieldType: FIELD_TYPES.number,
		fieldName: 'pct_65_over_2018',
		fieldDisplayName: 'PERCENT POP AGE > 65',
	},
	{
		fieldType: FIELD_TYPES.number,
		fieldName: 'svi_socioeconomic',
		fieldDisplayName: 'CDC SVI',
	},
	{
		fieldType: FIELD_TYPES.number,
		fieldName: 'icuover_max_needed_100k',
		fieldDisplayName: 'ICU SHORTAGE AT PEAK PER 100K',
	},
]






