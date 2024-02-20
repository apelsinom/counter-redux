import React from 'react';
import {ContainerCounter} from "./ContainerCounter";
import {Container} from "./Container";
import {InputBlock} from "./inputBlock/InputBlock";
import {Button} from "./button/Button";

type PropsType = {
    error: string
    addSettings: ()=>void
    disabledSet: boolean
    defaultClassSet?: string
    valueMax: number
    valueStart: number
    newValueMax: (newValue: number) => void
    newValueStart: (newValue: number) => void
}
export const SettingCounter = (props:PropsType) => {
    return (
        <ContainerCounter>
            <Container direction={'column'}
                       justify={'space-between'}
                       align={'space-around'}
                       height={'65%'}>
                <InputBlock title={'max value:'}
                            value={props.valueMax}
                            valueChange={props.newValueMax}
                            error={props.error}/>
                <InputBlock title={'start value:'}
                            value={props.valueStart}
                            valueChange={props.newValueStart}
                            error={props.error}/>
            </Container>
            <Container height={'35%'}>
                <Button onClick={props.addSettings}
                        disabled={props.disabledSet}
                        title={'set'}/>
            </Container>
        </ContainerCounter>
    );
};
