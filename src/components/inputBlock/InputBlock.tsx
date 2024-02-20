import React, {ChangeEvent} from 'react';
import s from './InputBlock.module.css';

type PropsType = {
    error: string
    title: string
    value: number
    valueChange: (newValue: number) => void
}

export const InputBlock = (props:PropsType) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.valueChange(parseInt(e.target.value, 10))
    }
    const classInput = s.input + ' ' + (props.error ? s.errorInputClass : '')
    return (
        <div className={s.textInputBlock}>
            <div>
            <span className={s.text}>{props.title}</span>
            </div>
            <div>
            <input className={classInput}
                   type={'number'}
                   value={props.value}
                   onChange={onChangeHandler}/>
            </div>
        </div>
    );
};

