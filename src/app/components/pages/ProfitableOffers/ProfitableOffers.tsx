import React, { useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import './ProfitableOffers.scss'

import { Card } from 'react-bootstrap'

import { nanoid } from 'nanoid'
import { CSSTransition } from 'react-transition-group'

import { bestIdea } from '../../../generic/Data/DataCard'
import ToastCustom from '../../../generic/ToastCustom/ToastCustom'
import electivesStore from "../../../lib/store/pages/Electives-store";

export default observer(() => {
    const [showMessage, setShowMessage] = useState(false)
    const nodeRef = useRef(null)

    useEffect(() => {
        electivesStore.setToastBtn('')
        setShowMessage(true)
    }, [])
    return (
        <CSSTransition in={showMessage} nodeRef={nodeRef} timeout={300} classNames="alert" unmountOnExit>
            <div ref={nodeRef}>
                <ToastCustom />
                {bestIdea.map((data) => (
                    <Card style={{ transform: 'none' }} key={nanoid()}>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Body>{data.body}</Card.Body>
                        <Card.Img className={'profitable-offers'} src={data.photo} />
                    </Card>
                ))}
            </div>
        </CSSTransition>
    )
})
