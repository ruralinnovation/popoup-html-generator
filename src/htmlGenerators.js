import {FIELD_TYPES} from "./constants";


const fieldDisplayNameStyle = isText => isText ? '' : `
	position: absolute;
	left: 0px;
	bottom: 8px;
	font-size: 16px;
`

const fieldValueStyle = isText => isText ? 'font-size: 1.5em' : `
	position: absolute;
	right: 8px;
	bottom: 8px;
	line-height: 1em;
	font-size: 3em;
`

const barContainerStyle = () => `
        width: 100%;
        height: 12px;
        border-radius: 4px;
        background-color: rgba(10,10,10,0.1);
      `

const barStyle = (fieldName) => `
        border-radius: 4px;
        height: 100%;
        width: 0;
        width: {{${fieldName}}}%;
        transition: width 0.8s;
        background-color: skyblue;
      `

const fieldWrapperStyle = isText => isText ? '' : `
	position: relative;
	padding-bottom: 4px;
	height: 3em;
`




const scoreBar = fieldName => `
			<div style="${barContainerStyle()}">
        <div style="${barStyle(fieldName)}"/>
      </div>
`

const generateNumericField = (numericFieldsAccumulator, {fieldName, fieldDisplayName, fieldType}) => {
	if (!fieldName || !fieldDisplayName || !fieldType) return numericFieldsAccumulator
	
	const isScore = fieldType === FIELD_TYPES.scoreOutOf100
	const isText = fieldType === FIELD_TYPES.text
	return numericFieldsAccumulator + `
    <li class="CDB-infowindow-listItem" style="min-height: 70px;">
    	<div style="${fieldWrapperStyle(isText)}">
				<div class="CDB-infowindow-subtitle" style="${fieldDisplayNameStyle(isText)}">${fieldDisplayName}</div>
				<div class="CDB-infowindow-title" style="${fieldValueStyle(isText)}">{{${fieldName}}}</div>
      </div>
      ${isScore ? scoreBar(fieldName) : ''}
    </li>
  `
}

export const generatePopupHTML = (fields, isDarkStyle) => {
	const numericFields = fields.reduce(generateNumericField, '')
	return `
    <div class="CDB-infowindow CDB-infowindow--${isDarkStyle ? 'dark' : 'light'} js-infowindow">
      <div class="CDB-infowindow-close js-close"></div>
      <div class="CDB-infowindow-container">
        <div class="CDB-infowindow-bg">
          <div class="CDB-infowindow-inner js-inner">
            <ul class="CDB-infowindow-list js-content">
                ${numericFields}
            </ul>
          </div>
        </div>
        <div class="CDB-hook">
          <div class="CDB-hook-inner"></div>
        </div>
      </div>
    </div>
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

