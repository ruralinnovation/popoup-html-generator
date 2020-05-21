import {FIELD_TYPES} from "./constants";

export const FONT_SIZE = {
	big: '18px',
	small: '12px',
}

export const fieldDisplayNameStyle = (isSubSectionHeader = false) => {
	if (isSubSectionHeader) {
		return `
			font-weight: bold;
			padding-top: 16px;
			font-size: ${FONT_SIZE.small};
			line-height: 1em;
			border-bottom: 1px solid white;
		`
	}
	return `
			font-size: ${FONT_SIZE.small};
			text-transform: capitalize;
		`
}

export const fieldValueStyle = () => `
	font-size: ${FONT_SIZE.big};
`

export const fieldWrapperStyle = (isText) => isText ? '' : `
	position: relative;
	padding-bottom: 4px;
	padding-top: 4px;
`

export const fieldContentWrapperStyle = (fieldType) => [FIELD_TYPES.zillowLink, FIELD_TYPES.wikipediaLink].includes(fieldType) ? '' : 'min-height: 42px;'

export const listItemStyle = () => ''
