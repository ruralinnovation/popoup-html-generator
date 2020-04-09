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


const listItemStyle = (isGradient) => isGradient ? `
	min-height: 3em;
	margin-top: 3em;
` : ''


const scoreBar = fieldName => `
			<div style="${barContainerStyle()}">
        <div style="${barStyle(fieldName)}"/>
      </div>
`

const scoreGradient = (gradientFieldName) => {
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

// TODO: actually let user set the eybrow label
const gradientEyebrowLabel = (eyebrowLabel = 'Preparedness Level:') => `
	<div class="CDB-infowindow-subtitle" style="position: absolute;left: 0px; top: 0;margin-top: -3em;font-size: 12px;text-transform: capitalize;">
		${eyebrowLabel}
	</div>
`


const fieldSection = (fieldSectionsAccumulator, {fieldName, fieldDisplayName, fieldType}) => {
	if (!fieldName || !fieldType) return fieldSectionsAccumulator
	
	const isScore = fieldType === FIELD_TYPES.scoreOutOf100
	const isText = fieldType === FIELD_TYPES.text
	const isGradient = fieldType === FIELD_TYPES.gradientOutOf100
	return fieldSectionsAccumulator + `
    <li class="CDB-infowindow-listItem" style="${listItemStyle(isGradient)}">
    	<div style="min-height: 42px;">
				<div style="${fieldWrapperStyle(isText)}">
					${isGradient ? gradientEyebrowLabel() : ''}
					<div class="CDB-infowindow-subtitle" style="${fieldDisplayNameStyle(isText, isGradient)}">${isGradient ? `{{${fieldName}}}` : fieldDisplayName}</div>
					<div class="CDB-infowindow-title" style="${fieldValueStyle(isText, isGradient)}">{{${isGradient ? fieldDisplayName : fieldName}}}</div>
				</div>
				${isScore ? scoreBar(fieldName) : (isGradient ? scoreGradient(fieldDisplayName) : '')}
      </div>
    </li>
  `
}

const locationHeader = () => `
	<div class="CDB-infowindow-header CDB-infowindow-headerBg CDB-infowindow-headerBg--light js-header" style="background: #191e21; padding-bottom: 16px;">
      <ul class="CDB-infowindow-list">
        <li class="CDB-infowindow-listItem">
          <h4 class="CDB-infowindow-title" style="font-size: 24px">
            {{name}}, {{st_stusps}}
          </h4>
        </li>
      </ul>
    </div>
`

const triangleMarker = (isDarkStyle) => `
	<div style="
			position: relative;
			bottom: 24px;
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
        ${triangleMarker(isDarkStyle)}
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

