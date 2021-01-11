import React from 'react';
import classNames from 'classnames';

export default (props) => {
    // className
    // invert
    // disabled
    // onClick
    console.log(props);
    return (
        <button
            className={classNames(props.className, { invert: props.invert })}
            disabled={props.disabled}
            onClick={e => props.disabled ? e.preventDefault() : props.onClick()}
        >
            {props.children}
        </button>)
};
