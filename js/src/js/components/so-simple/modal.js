import React from 'react';
import Button from 'components/so-simple/button';

export default (props) => {
    // title
    // isOpen
    // onCancel
    // onSubmit
    // onClose
    // cancel
    // submit
    // close
    // children
    // zIndex
    // cancelName
    // closeName
    // submitName
    // itemId
    // disabled
    // type
    // width
    // minHeight
    return (
        <>
            { props.isOpen &&
                <div
                    className="modal__overlay"
                    style={{ zIndex: props.zIndex }}
                    key={props.itemId}
                >
                    <div
                        className="modal__overlay-window"
                        style={{ width: props.width, minHeight: props.minHeight }}
                    >
                        <div className="modal__overlay-header">
                            <div className="modal__overlay-header__title">
                                {props.title}
                            </div>
                            <Button
                                className="modal__overlay-header__button-close"
                                onClick={
                                    props.cancel ?
                                        props.onCancel :
                                        props.close ?
                                            () => props.onClose({ data: { id: props.itemId } }) :
                                            null
                                }
                            >
                                ✖
                            </Button>
                        </div>
                        <div className="modal__overlay-body">
                            {props.children}
                        </div>
                        <div className="modal__overlay-footer">
                            {props.cancel &&
                                <Button
                                    className="modal__button"
                                    onClick={props.onCancel}
                                    invert
                                >
                                    {props.cancelName}
                                </Button>
                            }
                            {props.submit &&
                                <Button
                                    disabled={props.disabled}
                                    className="modal__button"
                                    onClick={() => props.onSubmit({ data: { id: props.itemId } })}
                                >
                                    {props.submitName}
                                </Button>
                            }
                            {props.close &&
                                <Button
                                    className="modal__button"
                                    onClick={() => props.onClose({ data: { id: props.itemId } })}
                                >
                                    {props.closeName}
                                </Button>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    );
};
