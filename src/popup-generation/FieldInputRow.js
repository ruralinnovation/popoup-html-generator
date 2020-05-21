import React from "react";
import {Input, Select, Button} from "antd";
import {FIELD_TYPES} from "./constants";

const calculateUIInfo = (fieldType) => {
	switch(fieldType) {
		case FIELD_TYPES.text:
		case FIELD_TYPES.number:
			return {
				fieldDisplayNameLabel: 'Field Display Name',
			}
		case FIELD_TYPES.link:
			return {
				fieldDisplayNameLabel: 'Link Text',
			}
		case FIELD_TYPES.subSectionHeader:
			return {
				fieldDisplayNameLabel: 'Header Text',
			}
		default:
			console.warn('Not a valid type')
			return {}
	}
}

export const FieldInputRow = ({index, fieldInputValue, onChange, onDeleteField}) => {
	const {fieldDisplayNameLabel} = calculateUIInfo(fieldInputValue.fieldType)
	const isNotSubSectionHeader = fieldInputValue.fieldType !== FIELD_TYPES.subSectionHeader
	const isLink = fieldInputValue.fieldType === FIELD_TYPES.link
	return (
		<div className="field-input-container" style={{display: 'flex'}}>
			<Input
				style={{flex: 2}}
				addonBefore={fieldDisplayNameLabel}
				value={fieldInputValue.fieldDisplayName}
				onChange={({target}) => onChange({...fieldInputValue, fieldDisplayName: target.value})}
			/>
			
			{isNotSubSectionHeader && <Input
				style={{flex: 2}}
				addonBefore={isLink ? 'URL' : 'CARTO Field'}
				value={fieldInputValue.fieldName}
				onChange={({target}) => onChange({...fieldInputValue, fieldName: target.value.trim()})}
			/>}
			
			<Select
				style={{flex: 1}}
				defaultValue={fieldInputValue.fieldType}
				className="field-type"
				onChange={(fieldType) => onChange({...fieldInputValue, fieldType})}
			>
				{Object.values(FIELD_TYPES).map(fieldType => <Select.Option key={fieldType} value={fieldType}>{fieldType}</Select.Option>)}
				
			</Select>
			<Button className="delete-button" onClick={() => onDeleteField(index)} danger>X</Button>
		</div>
	)
}
