import React from 'react';
import {Container} from "./Container";
import {Counter} from "./counter/Counter";
import {Button} from "./button/Button";
import {ContainerCounter} from "./ContainerCounter";

type PropsType = {
    counter: number
    error: string
    textChangeValue: string
    redClassCounter: string
    increaseByOne: ()=>void
    counterReset: ()=>void
    disabledInc: boolean
    disabledRes: boolean
    defaultClassInc?: string
    defaultClassRes?: string
}
export const BoxCounter = (props:PropsType) => {
    return (
        <ContainerCounter>
            <Container height={'65%'}>
                <Counter counter={props.counter}
                         error={props.error}
                         textChangeValue={props.textChangeValue}
                         redClassCounter={props.redClassCounter}/>
            </Container>
            <Container height={'35%'}>
                <Button onClick={props.increaseByOne}
                        disabled={props.disabledInc}
                        title={'inc'}/>
                <Button onClick={props.counterReset}
                        disabled={props.disabledRes}
                        title={'reset'}/>
            </Container>
        </ContainerCounter>
    );
};
