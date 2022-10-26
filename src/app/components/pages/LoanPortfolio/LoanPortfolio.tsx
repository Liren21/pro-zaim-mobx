import React, { useState, useRef, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'
import 'bootstrap/dist/css/bootstrap.min.css'
import './LoanPortfolio.scss'
import { observer } from 'mobx-react-lite'

export default observer(() => {
    const [showMessage, setShowMessage] = useState(false)
    const nodeRef = useRef(null)
    useEffect(() => {
        setShowMessage(true)
    }, [])
    return (
        <CSSTransition in={showMessage} nodeRef={nodeRef} timeout={300} classNames="alert" unmountOnExit>
            <div ref={nodeRef}>
                <Row>
                    <Col>
                        <Card style={{ transform: 'none', boxShadow: 'none' }}>
                            <Card.Title>Подбор займа</Card.Title>
                            <Card.Body>
                                {' '}
                                <strong>В данный моменнт фукция не работает,но мы работает над этим</strong>
                            </Card.Body>
                            <Card.Img
                                className={'profitable-offers'}
                                src={
                                    'https://admin.alente.ru/media/uploads/2021/08/19/depositphotos_426311568-stock-photo-3d-illustration-of-smiling-man.jpg'
                                }
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        </CSSTransition>
    )
})
