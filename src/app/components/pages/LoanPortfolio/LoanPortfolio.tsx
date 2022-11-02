import React, { useState, useRef, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'
import './LoanPortfolio.scss'
import { observer } from 'mobx-react-lite'
import electivesStore from '../../../lib/store/pages/Electives-store'
import ResultCard from './ResultCard/ResultCard'
import FormControlApp from '../../../../core/components/FormControlApp/FormControlApp'

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
                    <Card.Title>Введите сумму от</Card.Title>
                    <FormControlApp
                        value={electivesStore.minNumRange}
                        onChange={(val) => electivesStore.setMinNumRange(val)}
                    />
                    <br />
                    <br />

                    <ResultCard />
                </Card.Body>
            </div>
        </CSSTransition>
    )
})
