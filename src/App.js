import React, {useCallback, useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {copyToClipboard, generatePopupHTML} from "./htmlGenerators";
import {Button} from "antd";
import {HeartTwoTone, PlusCircleOutlined, SmileOutlined} from '@ant-design/icons';
import { Scrollama, Step } from 'react-scrollama';

import {GlowButton} from "./GlowButton";
import {BLANK_INPUT_FIELD, DEFAULT_INPUT_VALUES} from "./constants";
import {FieldInputRow} from "./FieldInputRow";
import {DarkStyleSwitch} from "./DarkStyleSwitch";
import {HippoBar} from "./HippoBar";



class Graphic extends React.Component {
  state = {
    data: 0,
  };
  
  onStepEnter = ({ element, data, direction }) => this.setState({ data });
  
  render() {
    const { data } = this.state;
    
    return (
      <div>
        <p>data: {data}</p>
        <Scrollama onStepEnter={this.onStepEnter}>
          <Step data={1}>
            <p>step 1</p>
          </Step>
          <Step data={2}>
            <p>step 2</p>
          </Step>
        </Scrollama>
      </div>
    );
  }
}

function App() {
  const [pageSectionIndex, setPageSectionIndex] = useState(0)
  const onStepEnter = useCallback(
    ({ element, data, direction }) => setPageSectionIndex(data),
    [setPageSectionIndex]
  )
  
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
    onChangeInput(BLANK_INPUT_FIELD, fieldInputValues.length)
  }, [fieldInputValues])
  
  const onDeleteField = useCallback((index) => {
    setFieldInputValues(fieldInputValues.filter((_, i) => i !== index))
  }, [fieldInputValues])
  
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className="App">
        <HippoBar pageSectionIndex={pageSectionIndex} pageSectionCount={4}/>
        
        <Scrollama onStepEnter={onStepEnter} offset={0.2}>
          
          <Step data={0}>
            <section className="splash-image">
              <img src="https://user-images.githubusercontent.com/6570507/78705140-e1c49700-78c1-11ea-827e-74b13bd2e439.gif" alt="popup demo" style={{maxWidth: '100%'}}/>
            </section>
          </Step>
          
          <Step data={1}>
            <section className="field-inputs-section">
              <h2>1. Specify the fields you want in your popup:</h2>
              <DarkStyleSwitch isDarkStyle={isDarkStyle} onToggle={onToggle}/>
              {fieldInputValues.map((fieldInputValue, i) => (
                <FieldInputRow
                  key={i}
                  index={i}
                  onChange={newValue => onChangeInput(newValue, i)}
                  onDeleteField={onDeleteField}
                  fieldInputValue={fieldInputValue}/>)
              )}
              <Button size="large" onClick={addNewInputField}>Add another field <PlusCircleOutlined style={{color: 'skyblue'}}/></Button>
            </section>
          </Step>
          
          <Step data={2}>
            <section>
              <h2>2.</h2>
              <GlowButton onClick={() => copyToClipboard(generatePopupHTML(fieldInputValues, isDarkStyle))}>
                Copy popup HTML to clipboard!
              </GlowButton>
            </section>
          </Step>
          
          <Step data={3}>
            <section>
              <h2>3. Paste into the CARTO custom HTML editor!</h2>
              <p>See photo instructions below.
                Most importantly, you need to toggle on all the fields you want displayed in the popup before going to the custom editor (toggling on all possible fields is the fool-proof way) <SmileOutlined rotate={180}/>
              </p>
              <img src="https://user-images.githubusercontent.com/6570507/78468037-3c929e80-76c8-11ea-8521-266ea1cbf47a.png" alt="custom popup instructions" style={{maxWidth: '100%'}}/>
              <img src="https://user-images.githubusercontent.com/6570507/78468098-f853ce00-76c8-11ea-847e-77f23fc55cab.png" alt="paste into editor" style={{maxWidth: '100%'}}/>
            </section>
          </Step>
        
        
        
        </Scrollama>
        
        <p>Made with <HeartTwoTone style={{color: 'red'}} /> by David</p>
      </div>
    </div>
  );
}

export default App;
