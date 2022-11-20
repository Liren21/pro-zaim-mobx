import React, {useEffect, useRef, useState} from 'react'
import {observer} from 'mobx-react-lite'
import './Rapport.scss'
import {Form} from "react-bootstrap";
import electivesStore from "../../../lib/store/pages/Electives-store";
import {CSSTransition} from 'react-transition-group'


export default observer(() => {
    const [showMessage, setShowMessage] = useState(false)
    const nodeRef = useRef(null)

    useEffect(() => {
        setShowMessage(true)
        electivesStore.setToastBtn('Связь с разработчиком')
    }, [showMessage])

    return (
        <CSSTransition in={showMessage} nodeRef={nodeRef} timeout={300} classNames="alert" unmountOnExit>
            <Form ref={nodeRef}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3}/>
                </Form.Group>
            </Form>
        </CSSTransition>
    )
})

