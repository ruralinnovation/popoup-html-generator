import React, {useCallback, useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {copyToClipboard, generatePopupHTML} from "./htmlGenerators";
import {Button} from "antd";
import {HeartTwoTone, PlusCircleOutlined, SmileOutlined} from '@ant-design/icons';
import {GlowButton} from "./GlowButton";
import {DEFAULT_INPUT_VALUES} from "./constants";
import {FieldInputRow} from "./FieldInputRow";
import {DarkStyleSwitch} from "./DarkStyleSwitch";
import {HippoBar} from "./HippoBar";


function App() {
  const [isDarkStyle, setIsDarkStyle] = useState(true)
  const onToggle = useCallback(
    () => setIsDarkStyle(!isDarkStyle),
    [isDarkStyle, setIsDarkStyle]
  )
  
  const [fieldInputValues, setFieldInputValues] = useState(DEFAULT_INPUT_VALUES)
  const onChangeInput = useCallback((newValue, i) => {
    const updatedFieldInputValues = [...fieldInputValues]
    updatedFieldInputValues[i] = newValue
    setFieldInputValues(updatedFieldInputValues)
  }, [fieldInputValues, setFieldInputValues])
  
  const addNewInputField = useCallback(() => {
    onChangeInput(DEFAULT_INPUT_VALUES[0], fieldInputValues.length)
  }, [fieldInputValues])
  
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className="App">
        <HippoBar/>
        <section className="field-inputs-section">
          <h2>1. Specify the fields you want in your popup:</h2>
          <DarkStyleSwitch isDarkStyle={isDarkStyle} onToggle={onToggle}/>
          {fieldInputValues.map((fieldInputValue, i) => (
            <FieldInputRow
              key={i}
              onChange={newValue => onChangeInput(newValue, i)}
              fieldInputValue={fieldInputValue}/>)
          )}
          <Button size="large" onClick={addNewInputField}>Add another field <PlusCircleOutlined style={{color: 'skyblue'}}/></Button>
        </section>
        
        <section>
          <h2>2.</h2>
          <GlowButton onClick={() => copyToClipboard(generatePopupHTML(fieldInputValues, isDarkStyle))}>
            Copy popup HTML to clipboard!
          </GlowButton>
        </section>
        
        <section>
          <h2>3. Paste into the CARTO custom HTML editor!</h2>
          <p>See photo instructions below.
            Most importantly, you need to toggle on all the fields you want displayed in the popup before going to the custom editor (toggling on all possible fields is the fool-proof way) <SmileOutlined rotate={180}/>
          </p>
          <img src="https://user-images.githubusercontent.com/6570507/78468037-3c929e80-76c8-11ea-8521-266ea1cbf47a.png" alt="custom popup instructions" style={{maxWidth: '100%'}}/>
          <img src="https://user-images.githubusercontent.com/6570507/78468098-f853ce00-76c8-11ea-847e-77f23fc55cab.png" alt="paste into editor" style={{maxWidth: '100%'}}/>
        </section>
        
        <p>Made with <HeartTwoTone style={{color: 'red'}} /> by David</p>
      </div>
    </div>
  );
}

export default App;
