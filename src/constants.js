export const FIELD_TYPES = {
	scoreOutOf100: 'Score (0 to 100)',
	number: 'Number',
	text: 'Text'
}

export const DEFAULT_INPUT_VALUES = [
	{
		fieldType: FIELD_TYPES.number,
		fieldName: 'total_staff_100k',
		fieldDisplayName: 'Staff per 100k',
	},
	{
		fieldType: FIELD_TYPES.scoreOutOf100,
		fieldName: 'prep_score_1',
		fieldDisplayName: 'County Preparedness Score (0-100)',
	},
	{
		fieldType: FIELD_TYPES.text,
		fieldName: 'prep_level',
		fieldDisplayName: 'Preparedness Level',
	},
]
