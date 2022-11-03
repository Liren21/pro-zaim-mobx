import React, { useState, useRef, useEffect } from 'react'
import { Card, Form } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'
import './LoanPortfolio.scss'
import { observer } from 'mobx-react-lite'
import electivesStore from '../../../lib/store/pages/Electives-store'
import ResultCard from './ResultCard/ResultCard'

export default observer(() => {
    const [showMessage, setShowMessage] = useState(false)

    const nodeRef = useRef(null)

    useEffect(() => {
        electivesStore.setToastBtn('Калькулятор')
        setShowMessage(true)
    }, [])
    return (
        <CSSTransition in={showMessage} nodeRef={nodeRef} timeout={300} classNames="alert" unmountOnExit>
            <div ref={nodeRef}>
                <Card.Body>
                    <br />
                    <Card.Title> Калькулятор выбора займа</Card.Title>
                    <br />
                    <div className={'loan-portfolio-text'}>
                        Калькулято предоставляет наилучший выбор конторы для займа
                    </div>
                    <br />
                    <br />
                    <Form.Label htmlFor="disabledTextInput">Сумма до</Form.Label>
                    <Form.Control
                        type="tel"
                        value={electivesStore.minNumRange}
                        onChange={(e) => electivesStore.setMinNumRange(Number(e.target.value))}
                    />
                    <br />
                    <br />
                    <ResultCard />
                </Card.Body>
            </div>
        </CSSTransition>
    )
})
