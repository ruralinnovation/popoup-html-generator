export const FIELD_TYPES = {
	scoreOutOf100: 'Score (0 to 100)',
	number: 'Number',
	text: 'Text'
}

export const DEFAULT_INPUT_VALUES = [
	{
		fieldType: FIELD_TYPES.text,
		fieldName: 'prep_level',
		fieldDisplayName: 'Preparedness Level',
	},
	
	{
		fieldType: FIELD_TYPES.scoreOutOf100,
		fieldName: 'bed_score_1',
		fieldDisplayName: 'ICU Bed score',
	},
	{
		fieldType: FIELD_TYPES.scoreOutOf100,
		fieldName: 'staff_score_1',
		fieldDisplayName: 'Critical Staff score',
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
	
	
	{
		fieldType: FIELD_TYPES.number,
		fieldName: 'total_staff_100k',
		fieldDisplayName: 'Staff per 100k',
	},
]






