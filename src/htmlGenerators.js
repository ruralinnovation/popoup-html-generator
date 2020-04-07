import {FIELD_TYPES} from "./constants";


const fieldDisplayNameStyle = (isText, isGradient) => isText ? '' : `
	position: absolute;
	left: 0px;
	bottom: 8px;
	font-size: ${isGradient ? '16px' : '12px'};
	${isGradient ? 'font-style: bolder;' : ''}
`

const fieldValueStyle = (isText, isGradient) => isText ? 'font-size: 1.5em' : `
	position: absolute;
	right: 8px;
	bottom: 8px;
	line-height: 1em;
	font-size: ${isGradient ? '3em' : '2em'};
`

const barContainerStyle = () => `
        width: 100%;
        height: 8px;
        border-radius: 4px;
        background-color: rgba(10,10,10,0.6);
      `

const barStyle = (fieldName) => `
        border-radius: 4px;
        height: 100%;
        width: 0;
        width: {{${fieldName}}}%;
        transition: width 0.8s;
        background-color: skyblue;
      `

const fieldWrapperStyle = (isText, isGradient) => isText ? '' : `
	position: relative;
	padding-bottom: 4px;
	padding-top: 4px;
	${isGradient ? 'height: 32px;' : ''}
`




const scoreBar = fieldName => `
			<div style="${barContainerStyle()}">
        <div style="${barStyle(fieldName)}"/>
      </div>
`

const generateGradientField = (gradientFieldName) => {
	return `
		<div class='bar-container' style="
                                  height: 12px;
                                  border-radius: 4px;
                                  position: relative;
                                  background: linear-gradient(90deg , #cf597e , #e88471 , #eeb479 , #e9e29c , #9ccb86 , #39b185 , #009392);
                                  ">
    	<div style="-webkit-transform: translateX(-12px)">
  			<div class='bar' style="
					border-radius: 0px;
					height: 0px;
					width: 0px;
					position: absolute;
					left: {{${gradientFieldName}}}%;
					top: -8px;
					border-left: 12px solid transparent;
					border-right: 12px solid transparent;
					border-top: 16px solid white;
					"/>
    	</div>
	</div>
	
	`
}

const listItemStyle = (isGradient) => isGradient ? `
	min-height: 3em;
	margin-top: 3em;
` : ''



const generateNumericField = (numericFieldsAccumulator, {fieldName, fieldDisplayName, fieldType}) => {
	if (!fieldName || !fieldType) return numericFieldsAccumulator
	
	const isScore = fieldType === FIELD_TYPES.scoreOutOf100
	const isText = fieldType === FIELD_TYPES.text
	const isGradient = fieldType === FIELD_TYPES.gradientOutOf100
	return numericFieldsAccumulator + `
    <li class="CDB-infowindow-listItem" style="${listItemStyle(isGradient)}">
    	<div style="min-height: 42px;">
				<div style="${fieldWrapperStyle(isText)}">
					<div class="CDB-infowindow-subtitle" style="${fieldDisplayNameStyle(isText, isGradient)}">${isGradient ? `{{${fieldName}}}` : fieldDisplayName}</div>
					<div class="CDB-infowindow-title" style="${fieldValueStyle(isText, isGradient)}">{{${isGradient ? fieldDisplayName : fieldName}}}</div>
				</div>
				${isScore ? scoreBar(fieldName) : (isGradient ? generateGradientField(fieldDisplayName) : '')}
      </div>
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

