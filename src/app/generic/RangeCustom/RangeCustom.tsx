import React, { useState, useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap'

import { observer } from 'mobx-react-lite'
import electivesStore from '../../lib/store/pages/Electives-store'

interface IRangeCustom {
    value?: string
    valueBtn?: string
    minRange?: number
    maxRange?: number
    onChange?: any
    onChangeBtn?: any
    tab: string
}

export default observer(({ value, valueBtn, onChange, onChangeBtn, minRange, maxRange, tab }: IRangeCustom) => {
    const [valueOne, setValueOne] = useState(null)

    useEffect(() => {
        {
            tab == 'min' ? electivesStore.setMinNumRange(valueOne) : electivesStore.setMaxNumRange(valueOne)
        }
    }, [valueOne])
    return (
        <Row>
            <Col style={{ display: 'inline-block' }}>
                <Form>
                    <Form.Group as={Row}>
                        <Col md={12} style={{ display: 'inline-block' }}>
                            <br />
                            Сумма
                            <Form.Control
                                placeholder={tab == 'min' ? `${minRange}` : `${maxRange}`}
                                value={valueOne}
                                onChange={(e) => {
                                    setValueOne(e.target.value)
                                }}
                            />
                            <br />
                        </Col>
                    </Form.Group>
                    <br />
                </Form>
            </Col>
        </Row>
    )
})
