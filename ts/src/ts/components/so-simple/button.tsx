import React from 'react';
import classNames from 'classnames';

type buttonType = {
    className: string,
    invert?: boolean,
    disabled?: boolean,
    onClick: Function,
    children: string,
}

export default (props: buttonType) => {
    return (
        <button
            className={classNames(props.className, {invert: props.invert})}
            disabled={props.disabled}
            onClick={e => props.disabled ? e.preventDefault() : props.onClick()}
        >
            {props.children}
        </button>);
};
