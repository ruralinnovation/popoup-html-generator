import {FIELD_TYPES} from "./constants";

const FONT_SIZE = {
	big: '18px',
	small: '12px',
}

const fieldDisplayNameStyle = (isSubSectionHeader = false) => {
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

const fieldValueStyle = () => `
	font-size: ${FONT_SIZE.big};
`

const fieldWrapperStyle = (isText) => isText ? '' : `
	position: relative;
	padding-bottom: 4px;
	padding-top: 4px;
`


const listItemStyle = () => ''


const textComponent = (text, isText, isSubSectionHeader = false) => `
	<div class="CDB-infowindow-subtitle" style="${fieldDisplayNameStyle(isSubSectionHeader)}">${text}</div>
`

const textOrNumberContent = (fieldName, fieldDisplayName, isText = false) => `
	<div style="${fieldWrapperStyle(isText)}">
		${textComponent(fieldDisplayName, isText)}
		<div class="CDB-infowindow-title" style="${fieldValueStyle()}">{{${fieldName}}}</div>
	</div>
`

// TODO: don't hard code county/state names
const link = (url, text) => `
	<div style="${fieldWrapperStyle(true)}">
		<div class="CDB-infowindow-title" style=${fieldDisplayNameStyle()}>
			<a href="${url}" target="_blank">🔗${text}</a>
		</div>
	</div>
`

const zillowLink = () => link('https://www.zillow.com/{{county_name}}-{{stusps}}/foreclosures/', 'Foreclosures on Zillow')

const wikipediaLink = () => link('https://en.wikipedia.org/wiki/{{county_name}},_{{stusps}}', 'Wikipedia')

const subSectionHeader = headerText => textComponent(headerText, true, true)

const fieldContent = ({fieldName, fieldDisplayName, fieldType}) => {
	switch(fieldType) {
		case FIELD_TYPES.text:
			return textOrNumberContent(fieldName, fieldDisplayName, true)
		case FIELD_TYPES.number:
			return textOrNumberContent(fieldName, fieldDisplayName)
		case FIELD_TYPES.zillowLink:
			return zillowLink()
		case FIELD_TYPES.wikipediaLink:
			return wikipediaLink()
		case FIELD_TYPES.subSectionHeader:
			return subSectionHeader(fieldDisplayName)
		default:
			console.warn('Not a valid type')
			return fieldDisplayName
	}
}

const fieldContentWrapperStyle = (fieldType) => [FIELD_TYPES.zillowLink, FIELD_TYPES.wikipediaLink].includes(fieldType) ? '' : 'min-height: 42px;'

const fieldSection = (fieldSectionsAccumulator, fieldInfo) => {
	if (!fieldInfo.fieldType) return fieldSectionsAccumulator
	
	const content = fieldContent(fieldInfo)
	
	return fieldSectionsAccumulator + `
    <li class="CDB-infowindow-listItem" style="${listItemStyle()}">
    	<div style="${fieldContentWrapperStyle(fieldInfo.fieldType)}">
				${content}
      </div>
    </li>
  `
}


// TODO: let user specify fields
const locationHeader = (regionNameField = 'county_name', stateNameField = 'stusps') => `
	<div class="CDB-infowindow-header CDB-infowindow-headerBg CDB-infowindow-headerBg--light js-header" style="background: #191e21; padding-bottom: 16px;">
      <ul class="CDB-infowindow-list">
        <li class="CDB-infowindow-listItem">
          <h4 class="CDB-infowindow-title" style="font-size: ${FONT_SIZE.big}; line-height: ${FONT_SIZE.big};">
            {{${regionNameField}}}, {{${stateNameField}}}
          </h4>
        </li>
      </ul>
    </div>
`

const triangleMarker = (isDarkStyle) => `
	<div style="
			position: relative;
			bottom: 25px;
			left: 24px;
	">
    <div style="
			position: absolute;
			top: 0;
			left: 0;
			width: 0;
			height: 0;
			border-top: 16px solid ${isDarkStyle ? '#2e3c42' : 'white'};
			border-right: 24px solid transparent;
			z-index: 3;
				"/>
    </div>
`

export const generatePopupHTML = (fields, isDarkStyle) => {
	const fieldSections = fields.reduce(fieldSection, '')
	return `
    <div class="CDB-infowindow CDB-infowindow--${isDarkStyle ? 'dark' : 'light'} js-infowindow">
      <div class="CDB-infowindow-close js-close"></div>
      <div class="CDB-infowindow-container">
        <div class="CDB-infowindow-bg">
        ${locationHeader()}
          <div class="CDB-infowindow-inner js-inner">
            <ul class="CDB-infowindow-list js-content">
                ${fieldSections}
            </ul>
          </div>
        </div>
        
      </div>
    </div>
    ${triangleMarker(isDarkStyle)}
  `
}


export const copyToClipboard = str => {
	const el = document.createElement('textarea');
	el.value = str;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
};

