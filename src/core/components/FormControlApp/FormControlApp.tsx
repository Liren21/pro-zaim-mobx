/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import './FormControlApp.scss'
import React, {useState} from 'react'
import {Form, FormControl, InputGroup} from 'react-bootstrap'
import {IFormControlAppProps, init} from './extensions/form-control-app'
import validateForm from './extensions/validation-control-app'
import DatePickerApp from '../DatePickerApp/DatePickerApp'
import Select from 'react-select'


const FormControlApp = (props: IFormControlAppProps): JSX.Element => {
    const initState = init(props)
    const [validErrors, setValidErrors] = useState([])
    const [isInvalid, setIsInvalid] = useState(undefined)

    const onChange = (val) => {
        let value = val && val.currentTarget ? val.currentTarget.value : val

        if (initState.type === 'number') {
            value = Number(value)
        }

        const propsValidate = {
            value: value,
            type: initState.type,
            minLength: initState.minLength,
            maxLength: initState.maxLength,
            minValue: initState.minValue,
            maxValue: initState.maxValue,
            pattern: initState.pattern,
            required: initState.required,
            patternError: initState.patternError,

        }

        const errors = validateForm(propsValidate)

        if (props.as !== 'select') {
            setValidErrors(errors)
            setIsInvalid(errors.length > 0 ? false : undefined)
        }

        initState.onChange(propsValidate.value)
    }

    return (
        <div className={initState.classes}>
            {initState.label ? (
                <Form.Label className={initState.classesLabel}>
                    {initState.label}
                    {initState.required ? <span style={{color: 'darkred'}}>*</span> : null}
                </Form.Label>
            ) : null}
            {initState.type === 'date' ? (
                <div className={'bok'}>
                    <InputGroup className={'kol'}>
                        <DatePickerApp
                            classes={'fol'}
                            id={initState.id}
                            type={initState.type}
                            style={initState.style}
                            required={initState.required}
                            onChange={onChange}
                            selected={String(initState.value)}
                            minDate={String(initState.minValue)}
                            maxDate={String(initState.maxValue)}
                            disabled={initState.disabled}
                            isInvalid={isInvalid}
                        />

                    </InputGroup>
                    <br/>
                </div>
            ) : initState.as === 'select' ? (
                <Select
                    id={initState.id}
                    key={initState.id}
                    onChange={onChange}
                    type={initState.type}
                    // isInvalid={isInvalid}
                    value={initState.value}
                    style={initState.style}
                    required={initState.required}
                    disabled={initState.disabled}
                    defaultValue={initState.value}
                    autoFocus={initState.autoFocus}
                    className={initState.classesInput}
                    placeholder={initState.placeholder}
                    options={initState.selectProps.options}
                    isMulti={initState.selectProps.isMulti}
                    isClearable={initState.selectProps.isClearable}
                    noOptionsMessage={() => initState.emptyMessage}
                    // isValid={isInvalid === undefined ? isInvalid : !isInvalid}
                    closeMenuOnSelect={initState.selectProps.closeMenuOnSelect}
                />
            ) : (
                <div>
                    <InputGroup className={'mb'}>
                        <FormControl type={initState.type} value={initState.value} onChange={onChange} id={initState.id}
                                     placeholder={initState.placeholder}/>
                    </InputGroup>
                    <br/>
                </div>

            )}

            {/* <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>*/}
            <Form.Text className={'form-errors'}>
                {validErrors.map((error, idx) => (
                    <div key={idx} className={'text-danger'}>
                        {error}
                    </div>
                ))}
            </Form.Text>
        </div>
    )
}
export default FormControlApp
