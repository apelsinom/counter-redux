import React from 'react';
import s from './Button.module.css'

type PropsType = {
    title:string
    onClick: ()=>void
    disabled: boolean
}
export const Button = (props:PropsType) => {
    const classButton = s.button
        + ' ' + (props.disabled
            ? s.disabled
            : s.activ)
    return (
            <button className={classButton}
                    onClick={props.onClick}
                    disabled={props.disabled}>
                {props.title}
            </button>
    );
};

