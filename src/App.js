import React, {useState, useCallback} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {generatePopupHTML, copyToClipboard} from "./htmlGenerators";
import {Button, Input, Select} from "antd";
import {
  HeartTwoTone
} from '@ant-design/icons';
import {GlowButton} from "./GlowButton";
import {FIELD_TYPES, DEFAULT_INPUT_VALUES} from "./constants";

const FieldInput = ({fieldInputValue, onChange}) => {
  return (
    <div className="field-input-container" style={{display: 'flex', padding: 24}}>
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
      <Input
        style={{flex: 2}}
        addonBefore="CARTO Field"
        placeholer={"eg state_pop_2018"}
        value={fieldInputValue.fieldName}
        onChange={({target}) => onChange({...fieldInputValue, fieldName: target.value.trim()})}
      />
      <Input
        style={{flex: 2}}
        addonBefore="Title"
        placeholer={"eg The State Population in 2018"}
        value={fieldInputValue.fieldDisplayName}
        onChange={({target}) => onChange({...fieldInputValue, fieldDisplayName: target.value.trim()})}
      />
    </div>
  )
}


function App() {
  
  const [fieldInputValues, setFieldInputValues] = useState(DEFAULT_INPUT_VALUES)
  const onChangeInput = useCallback((newValue, i) => {
    const updatedFieldInputValues = [...fieldInputValues]
    updatedFieldInputValues[i] = newValue
    setFieldInputValues(updatedFieldInputValues)
  }, [fieldInputValues, setFieldInputValues])
  
  const addNewInputField = useCallback(() => {
    onChangeInput(DEFAULT_INPUT_VALUES[0], fieldInputValues.length)
  }, [fieldInputValues])
  
  console.log(fieldInputValues)
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className="App">
        <section className="field-inputs-section">
          <h2>1. Specify the fields you want in your popup:</h2>
          {fieldInputValues.map((fieldInputValue, i) => (
            <FieldInput
              key={i}
              onChange={newValue => onChangeInput(newValue, i)}
              fieldInputValue={fieldInputValue}/>)
          )}
          <Button size="large" onClick={addNewInputField}>Add another field</Button>
        </section>
        
        <section>
          <h2>2. Paste into the CARTO custom HTML editor!</h2>
          <GlowButton onClick={() => copyToClipboard(generatePopupHTML(fieldInputValues))}>
            Copy popup HTML to clipboard!
          </GlowButton>
          <p>Made with <HeartTwoTone style={{color: 'red'}} /> by David</p>
        </section>
      </div>
    </div>
  );
}

export default App;
