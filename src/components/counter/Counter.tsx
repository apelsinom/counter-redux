import React from 'react';
import s from './Counter.module.css'

type PropsType = {
    error: string
    textChangeValue: string
    counter: number
    redClassCounter: string
}
export const Counter = (props: PropsType) => {
    const classValueCounter = props.error
        ? s.errorText
        : props.textChangeValue
            ? s.textValue
            : props.redClassCounter + ' ' + s.sizeNumber
    return (
        <p className={classValueCounter}>
            {
                props.error
                    ? props.error
                    : props.textChangeValue
                        ? props.textChangeValue
                        : props.counter
            }
        </p>
    );
};

