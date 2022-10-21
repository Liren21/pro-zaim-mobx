import React, {useState, useRef, useEffect} from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import {observer} from "mobx-react-lite";
import FloatingLabelForm from "../../../generic/FloatingLabelForm/FloatingLabelForm";

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
                            <Card.Title>Персональные данные</Card.Title>
                            <Card.Body>
                                <FloatingLabelForm label={"Фамилия"}/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

        </CSSTransition>

    )
})
