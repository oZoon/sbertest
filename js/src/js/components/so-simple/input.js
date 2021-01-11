import React from 'react';

export default (props) => {
    // marginLeft
    // id
    // onPartialSave
    // partialData
    // onSave
    return (
        <input
            style={{ marginLeft: props.marginLeft }}
            name={props.id}
            id={props.id}
            className="input"
            type="text"
            onChange={e => props.onPartialSave({ data: { text: e.target.value } })}
            value={props.partialData}
            autoComplete="off"
            onKeyDown={e => e.key == 'Enter' ? props.onSave() : null}
        />
    );
};
