import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";
import {SettingCounter} from "../SettingCounter";
import {BoxCounter} from "../BoxCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/stor";
import {valueCounterAC, valueMaxAC, valueResetCounterAC, valueStartAC} from "../bll/counter-reducer";

function App() {
    const valueStart = useSelector<AppStateType, number>(state => state.counter.valueStart);
    const valueMax = useSelector<AppStateType, number>(state => state.counter.valueMax);
    let counter = useSelector<AppStateType, number>(state => state.counter.counter);
    let [error, setError] = useState<string>('');
    let [textChangeValue, setTextChangeValue] = useState<string>('');
    let [disabledSet, setDisabledSet] = useState<boolean>(true);
    let [disabledRes, setDisabledRes] = useState<boolean>(false);
    let [disabledInc, setDisabledInc] = useState<boolean>(false);
    const dispatch = useDispatch();

    const textError = "Incorrect value!";
    const textValue = "enter values and press 'set'";
    const newValueStart = (newValue: number) => {
        dispatch(valueStartAC(newValue))
        if(newValue<0 || newValue>=valueMax) {
            setError(textError)
            setDisabledSet(true)
            setDisabledRes(true)
            setDisabledInc(true)
        } else {
            setError("")
            setTextChangeValue(textValue)
            setDisabledSet(false)
        }
    }
    const newValueMax = (newValue: number) => {
        dispatch(valueMaxAC(newValue))
        if(newValue<=valueStart) {
            setError(textError)
            setDisabledSet(true)
        } else {
            setError("")
            setTextChangeValue(textValue)
            setDisabledSet(false)
            setDisabledRes(true)
        }
    }
    const increaseByOne = () => {
        setDisabledRes(false)
        if (counter < valueMax) {
            dispatch(valueCounterAC(counter))
        }
        if (counter === valueMax-1)  {
            setDisabledInc(true)
        }
    }
    const counterReset = () => {
        dispatch(valueResetCounterAC())
        setDisabledRes(true)
        setDisabledInc(false)
    }
    const addSettings = () => {
        setTextChangeValue("")
        setError("")
        dispatch(valueResetCounterAC())
        setDisabledSet(true)
        setDisabledRes(true)
        setDisabledInc(false)
    }
    const redClassCounter = counter === valueMax ? 'red-counter' : '';

    return (
        <ContainerMain>
            <SettingCounter disabledSet={disabledSet}
                            error={error}
                            addSettings={addSettings}
                            valueMax={valueMax}
                            valueStart={valueStart}
                            newValueMax={newValueMax}
                            newValueStart={newValueStart}/>
            <BoxCounter counter={counter}
                        error={error}
                        textChangeValue={textChangeValue}
                        redClassCounter={redClassCounter}
                        increaseByOne={increaseByOne}
                        counterReset={counterReset}
                        disabledInc={disabledInc}
                        disabledRes={disabledRes}/>
        </ContainerMain>
    );
}
export default App;

const ContainerMain = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`


