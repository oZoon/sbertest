import React from 'react';
import Button from '../so-simple/button';

type modalType = {
    title: string,
    isOpen: boolean,

    onCancel: Function,
    cancelName: string,

    submit?: boolean,
    onSubmit?: Function,
    submitName?: string,

    children: Object,
    zIndex: number,
    itemId?: string,
    disabled?: boolean,
    width?: string,
    minHeight?: string,
}

export default (props: modalType) => {
    return (
        <>
            { props.isOpen &&
                <div
                    className="modal__overlay"
                    style={{zIndex: props.zIndex}}
                    key={props.itemId}
                >
                    <div
                        className="modal__overlay-window"
                        style={{width: props.width, minHeight: props.minHeight}}
                    >
                        <div className="modal__overlay-header">
                            <div className="modal__overlay-header__title">
                                {props.title}
                            </div>
                            <Button
                                className="modal__overlay-header__button-close"
                                onClick={() => props.onCancel({data: {id: props.itemId}})}
                            >
                                ✖
                            </Button>
                        </div>
                        <div className="modal__overlay-body">
                            {props.children}
                        </div>
                        <div className="modal__overlay-footer">
                            <Button
                                className="modal__button"
                                onClick={() => props.onCancel({data: {id: props.itemId}})}
                                invert
                            >
                                {props.cancelName}
                            </Button>
                            {props.submit && props.submitName &&
                                <Button
                                    disabled={props.disabled}
                                    className="modal__button"
                                    onClick={() => {
                                        if (props.onSubmit) {
                                            props.onSubmit({data: {id: props.itemId}});}
                                    }
                                    }
                                >
                                    {props.submitName}
                                </Button>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    );
};
