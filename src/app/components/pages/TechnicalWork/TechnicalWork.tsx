import React, {useEffect, useRef, useState} from 'react'
import {observer} from 'mobx-react-lite'
import './TechnicalWork.scss'
import {CSSTransition} from 'react-transition-group'
import {Col, Row} from 'react-bootstrap'


export default observer(() => {

    const [showMessage, setShowMessage] = useState(false)
    const nodeRef = useRef(null)

    useEffect(() => {
        setShowMessage(true)
    }, [])

    return (
        <CSSTransition in={showMessage} nodeRef={nodeRef} timeout={300} classNames="alert" unmountOnExit>

            <Row>
                <Col>
                    <div ref={nodeRef}>
                        <br/>
                        <br/>
                        <div style={{textAlign: 'center', fontSize: '2rem'}}>
                            Технические работы, сервис скоро заработает
                        </div>
                        <br/>
                        <br/>
                        <div style={{textAlign: 'center', fontSize: '6rem'}}>
                            🤕
                        </div>
                    </div>
                </Col>
            </Row>

        </CSSTransition>
    )
})
