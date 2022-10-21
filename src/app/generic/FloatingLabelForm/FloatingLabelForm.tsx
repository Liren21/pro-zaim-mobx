import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {observer} from "mobx-react-lite";
import React from 'react';
interface IFloatingLabelForm {
    controlId?:string
    label?:string
    className?:string
    type?:string
    value?:string
    onChange?:any
}
export default observer(({controlId,label,className,type,value,onChange}:IFloatingLabelForm) => {
    return (
        <>
            <FloatingLabel
                controlId={controlId}
                label={label}
                className={className}

            >
                <Form.Control  value={value} onChange={onChange} type={type} placeholder={label} />
            </FloatingLabel>
        </>
    );
})

