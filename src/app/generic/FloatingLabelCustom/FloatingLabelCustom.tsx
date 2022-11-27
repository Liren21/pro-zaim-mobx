import {Button, Card, Col, FloatingLabel, Form, Row} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import './FloatingLabelCustom.scss'
import React from 'react'
import {Search, Trash} from "react-bootstrap-icons";


interface IFloatingLabelCustom {
    value: any
    onChange?: React.ReactEventHandler
    onclickBtn?: React.ReactEventHandler
    onclickBtnSecond?: React.ReactEventHandler
    label: string
    type?: string
}

export default observer(({
                             value,
                             onChange,
                             onclickBtn,
                             onclickBtnSecond,
                             label,
                             type
                         }: IFloatingLabelCustom) => {




    return (

        <Form onSubmit={(e) => e.preventDefault()}>
            <Card className={'floating-label-Custom-card'}>
                <Row>
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
                            // style={{padding:' 0 1rem', fontSize:'1rem'}}
                        >
                            <Form.Control  value={value} onChange={onChange} maxLength={100} type={type}
                                           placeholder="Поиск"/>
                        </FloatingLabel>
                    </Col>
                    <Col
                        // style={{display: 'inline-block', textAlign: 'center'}}
                        xs={4}
                        sm={4}
                        md={2}
                        className={'floating-form-btn'}

                    >
                        <Button style={{margin:'0 5px'}} onClick={onclickBtnSecond}  title={'Поиск'}
                                variant={"outline-light"}>
                            <Trash style={{fontSize:'1.2rem'}}  />
                        </Button>
                        <Button type={'submit'} style={{textAlign:'center'}}  onClick={onclickBtn} title={'Поиск'}
                                variant={"outline-light"}>
                            <Search  style={{fontSize:'1.2rem'}}/>
                        </Button>
                    </Col>




                </Row>
            </Card>

        </Form>


    )
})
