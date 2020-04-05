import React, {useCallback, useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {copyToClipboard, generatePopupHTML} from "./htmlGenerators";
import {Button} from "antd";
import {HeartTwoTone, PlusCircleOutlined} from '@ant-design/icons';
import {GlowButton} from "./GlowButton";
import {DEFAULT_INPUT_VALUES} from "./constants";
import {FieldInputRow} from "./FieldInputRow";


function App() {
  
  const [fieldInputValues, setFieldInputValues] = useState(DEFAULT_INPUT_VALUES.slice(1, 2))
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
            <FieldInputRow
              key={i}
              onChange={newValue => onChangeInput(newValue, i)}
              fieldInputValue={fieldInputValue}/>)
          )}
          <Button size="large" onClick={addNewInputField}>Add another field <PlusCircleOutlined style={{color: 'skyblue'}}/></Button>
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
