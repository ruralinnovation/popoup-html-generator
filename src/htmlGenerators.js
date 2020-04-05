import {FIELD_TYPES} from "./constants";


const fieldValueStyle = () => `
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
const scoreBar = fieldName => `
			<div style="${barContainerStyle()}">
        <div style="${barStyle(fieldName)}"/>
      </div>
`

const generateNumericField = (numericFieldsAccumulator, {fieldName, fieldDisplayName, fieldType}) => {
	if (!fieldName || !fieldDisplayName || !fieldType) return numericFieldsAccumulator
	
	const isScore = fieldType === FIELD_TYPES.scoreOutOf100
	return numericFieldsAccumulator + `
    <li class="CDB-infowindow-listItem" style="min-height: 70px;">
      <h5 class="CDB-infowindow-subtitle">${fieldDisplayName}</h5>
      <h4 class="CDB-infowindow-title" style="${fieldValueStyle()}">{{${fieldName}}}</h4>
      ${isScore ? scoreBar(fieldName) : ''}
    </li>
  `
}

export const generatePopupHTML = (fields) => {
	const numericFields = fields.reduce(generateNumericField, '')
	return `
    <div class="CDB-infowindow CDB-infowindow--light js-infowindow">
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
	console.log('Copied to clipboard!')
	document.body.removeChild(el);
};

