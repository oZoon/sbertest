import React from 'react';

type inputType = {
    marginLeft?: string,
    id: string,
    onPartialSave: Function,
    partialData: string,
    onSave: Function,
}

export default (props: inputType) => {
    return (
        <input
            style={{marginLeft: props.marginLeft}}
            name={props.id}
            id={props.id}
            className="input"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onPartialSave({data: {text: e.currentTarget.value}})}
            value={props.partialData}
            autoComplete="off"
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key == 'Enter' ? props.onSave() : null}
        />
    );
};
