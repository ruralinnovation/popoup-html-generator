import React from "react";
import {Input, Select, Button} from "antd";
import {FIELD_TYPES} from "./constants";

const calculateUIInfo = (fieldType) => {
	switch(fieldType) {
		case FIELD_TYPES.text:
			return {
				showFieldName: true,
				fieldDisplayNameLabel: 'Field Display Name',
			}
		case FIELD_TYPES.number:
			return {
				showFieldName: true,
				fieldDisplayNameLabel: 'Field Display Name',
			}
		case FIELD_TYPES.zillowLink:
			return {}
		case FIELD_TYPES.wikipediaLink:
			return {}
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
	const {showFieldName, fieldDisplayNameLabel} = calculateUIInfo(fieldInputValue.fieldType)
	return (
		<div className="field-input-container" style={{display: 'flex'}}>
			{fieldDisplayNameLabel && <Input
				style={{flex: 2}}
				addonBefore={fieldDisplayNameLabel}
				value={fieldInputValue.fieldDisplayName}
				onChange={({target}) => onChange({...fieldInputValue, fieldDisplayName: target.value})}
			/>}
			
			{showFieldName && <Input
				style={{flex: 2}}
				addonBefore="CARTO Field"
				placeholer={"eg state_pop_2018"}
				value={fieldInputValue.fieldName}
				onChange={({target}) => onChange({...fieldInputValue, fieldName: target.value.trim()})}
			/>}
			
			<Select
				style={{flex: 1}}
				defaultValue={fieldInputValue.fieldType}
				className="field-type"
				onChange={(fieldType) => onChange({...fieldInputValue, fieldType})}
			>
				<Select.Option value={FIELD_TYPES.number}>{FIELD_TYPES.number}</Select.Option>
				<Select.Option value={FIELD_TYPES.text}>{FIELD_TYPES.text}</Select.Option>
				<Select.Option value={FIELD_TYPES.zillowLink}>{FIELD_TYPES.zillowLink}</Select.Option>
				<Select.Option value={FIELD_TYPES.wikipediaLink}>{FIELD_TYPES.wikipediaLink}</Select.Option>
				<Select.Option value={FIELD_TYPES.subSectionHeader}>{FIELD_TYPES.subSectionHeader}</Select.Option>
			</Select>
			<Button className="delete-button" onClick={() => onDeleteField(index)} danger>X</Button>
		</div>
	)
}
