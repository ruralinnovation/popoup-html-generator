import React from "react";
import {Input, Select} from "antd";
import {FIELD_TYPES} from "./constants";


export const FieldInputRow = ({fieldInputValue, onChange}) => {
	return (
		<div className="field-input-container" style={{display: 'flex', padding: 24}}>
			<Input
				style={{flex: 2}}
				addonBefore="Title"
				placeholer={"eg The State Population in 2018"}
				value={fieldInputValue.fieldDisplayName}
				onChange={({target}) => onChange({...fieldInputValue, fieldDisplayName: target.value})}
			/>
			
			<Input
				style={{flex: 2}}
				addonBefore="CARTO Field"
				placeholer={"eg state_pop_2018"}
				value={fieldInputValue.fieldName}
				onChange={({target}) => onChange({...fieldInputValue, fieldName: target.value.trim()})}
			/>
			
			<Select
				style={{flex: 1}}
				defaultValue={fieldInputValue.fieldType}
				className="field-type"
				onChange={(fieldType) => onChange({...fieldInputValue, fieldType})}
			>
				<Select.Option value={FIELD_TYPES.scoreOutOf100}>{FIELD_TYPES.scoreOutOf100}</Select.Option>
				<Select.Option value={FIELD_TYPES.number}>{FIELD_TYPES.number}</Select.Option>
				<Select.Option value={FIELD_TYPES.text}>{FIELD_TYPES.text}</Select.Option>
			</Select>
		</div>
	)
}
