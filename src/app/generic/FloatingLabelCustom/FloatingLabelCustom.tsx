import {Button, Card, Col, FloatingLabel, Form, Row} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import './FloatingLabelCustom.scss'
import React from 'react'

interface IFloatingLabelCustom {
    value: any
    onChange?: (val: any) => void
    onclickBtn?: (val: any) => void
    onclickBtnSecond?: (val: any) => void
    label: string
    type: string
}

export default observer(({value, onChange, onclickBtn, onclickBtnSecond, label, type}: IFloatingLabelCustom) => {
    return (
        <Row>
            <Card className={'floating-label-Custom-card'}>
                <Col
                    style={{display: 'inline-block',}}
                    xs={8}
                    sm={8}
                    md={10}
                >
                    <FloatingLabel
                        controlId="floatingInput"
                        label={label}
                        className="mb-3"
                    >
                        <Form.Control value={value} onChange={onChange} maxLength={200} type={type}
                                      placeholder="Поиск"/>
                    </FloatingLabel>
                </Col>
                <Col
                    style={{display: 'inline-block', textAlign: 'right'}}
                    xs={4}
                    sm={4}
                    md={2}

                >
                    <Button onClick={onclickBtnSecond} style={{display: 'inline-block'}} title={'Поиск'}
                            variant={"outline-light"}>

                        <i className="fa fa-trash"
                           aria-hidden="true"/>

                    </Button>
                    <Button style={{display: 'inline-block'}} onClick={onclickBtn} title={'Поиск'}
                            variant={"outline-light"}>

                        <i className="fa fa-search"
                           aria-hidden="true"/>

                    </Button>
                </Col>
            </Card>
        </Row>

    )
})
