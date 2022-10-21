import React, {useState, useRef, useEffect} from 'react';
import { Card, Row, Col,} from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoanPortfolio.scss';
import {observer} from "mobx-react-lite";


export default observer(() => {

    const [showMessage, setShowMessage] = useState(false);
    const nodeRef = useRef(null);
    useEffect(() => {

        setShowMessage(true)
    }, [])
    return (


        <CSSTransition
            in={showMessage}
            nodeRef={nodeRef}
            timeout={300}
            classNames="alert"
            unmountOnExit
        >
            <div ref={nodeRef}>
                <Row>
                    <Col>
                        <Card style={{transform: "none", boxShadow: "none"}}>
                            <Card.Title>Подбор займа</Card.Title>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

        </CSSTransition>

    )
})
