import React, {useEffect, useRef, useState} from 'react'
import {observer} from 'mobx-react-lite'
import './Home.scss'
import {data} from '../../generic/Data/DataCard'
import {Col, Row} from 'react-bootstrap'

import {nanoid} from 'nanoid'
import {CSSTransition} from 'react-transition-group'
import electivesStore from '../../lib/store/pages/Electives-store'
import ToastCustom from '../../generic/ToastCustom/ToastCustom'
import ModalLoader from '../../generic/ModalLoader/ModalLoader'
import ServiceCard from "../../generic/ServiceCard/ServiceCard";


export default observer(() => {
    const [showMessage, setShowMessage] = useState(false)
    const nodeRef = useRef(null)

    useEffect(() => {
        electivesStore.setToastBtn('Займ')
        setShowMessage(true)
        electivesStore.setStateLoader(false)
    }, [])
    return (
        <CSSTransition in={showMessage} nodeRef={nodeRef} timeout={300} classNames="alert" unmountOnExit>
            <div ref={nodeRef} style={{display: 'inline-block'}}>
                <ModalLoader/>
                <ToastCustom/> <Row  key={nanoid()}>
                {data.map((data) => (

                    <Col md={6} lg={4} xl={3} style={{paddingBottom:".7rem"}} key={nanoid()}>
                        <ServiceCard data={data}/>
                    </Col>

                ))} </Row>
            </div>
        </CSSTransition>
    )
})
