import React, {useState, useCallback} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {generatePopupHTML, copyToClipboard} from "./htmlGenerators";
import {Input} from "antd";
import {
  HeartTwoTone
} from '@ant-design/icons';
import {GlowButton} from "./GlowButton";

const defaultInputValues = [
  {
    fieldName: 'total_staff_100k',
    fieldDisplayName: 'Staff per 100k',
  },
  {
    fieldName: 'prep_score_1',
    fieldDisplayName: 'County Preparedness',
  },
]

const FieldInput = ({fieldInputValue, onChange}) => {
  return (
    <div style={{display: 'flex', padding: 24}}>
      <Input
        addonBefore="CARTO Field"
        placeholer={"eg state_pop_2018"}
        value={fieldInputValue.fieldName}
        onChange={({target}) => onChange({...fieldInputValue, fieldName: target.value})}
      />
      <Input
        addonBefore="Title"
        placeholer={"eg The State Population in 2018"}
        value={fieldInputValue.fieldDisplayName}
        onChange={({target}) => onChange({...fieldInputValue, fieldDisplayName: target.value})}
      />
    </div>
  )
}


function App() {
  
  const [fieldInputValues, setFieldInputValues] = useState(defaultInputValues)
  const onChangeInput = useCallback((newValue, i) => {
    const updatedFieldInputValues = [...fieldInputValues]
    updatedFieldInputValues[i] = newValue
    setFieldInputValues(updatedFieldInputValues)
  }, [fieldInputValues, setFieldInputValues])
  console.log(defaultInputValues)
  
  return (
    <div className="App">
      <div>
        <h2>1. Specify the fields you want in your popup:</h2>
        {fieldInputValues.map((fieldInputValue, i) => (
          <FieldInput
            key={i}
            onChange={newValue => onChangeInput(newValue, i)}
            fieldInputValue={fieldInputValue}/>)
        )}
        <h2>2. Copy it and bounce!</h2>
        <GlowButton onClick={() => copyToClipboard(generatePopupHTML(fieldInputValues))}>
          Copy HTML to clipboard!
        </GlowButton>
        <p><HeartTwoTone style={{color: 'red'}} /> David</p>
        
      </div>
    </div>
  );
}

export default App;
