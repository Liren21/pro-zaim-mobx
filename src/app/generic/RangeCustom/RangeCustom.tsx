import React, { useState, useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap'

import { observer } from 'mobx-react-lite'
import electivesStoreStore from '../../lib/store/pages/ElectivesStore-store'

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
            tab == 'min' ? electivesStoreStore.setMinNumRange(valueOne) : electivesStoreStore.setMaxNumRange(valueOne)
        }
    }, [valueOne])
    return (
        <Row>
            <Col style={{ display: 'inline-block' }}>
                <Form>
                    <Form.Group as={Row}>
                        <Col style={{ display: 'inline-block' }}>
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
