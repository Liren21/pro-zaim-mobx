import React, { useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import './UpdateComp.scss'

import { Card, ListGroup } from 'react-bootstrap'

import { nanoid } from 'nanoid'
import { CSSTransition } from 'react-transition-group'

import { updComp } from '../../../generic/Data/DataCard'
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
                {updComp.map((data) => (
                    <Card style={{ transform: 'none' }} key={nanoid()}>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Body>
                            <ListGroup>
                                <MyBodyCard data={data.body} />
                            </ListGroup>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </CSSTransition>
    )
})
const MyBodyCard = ({ data }: any) => (
    <>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
        {data.map((data) => (
            <ListGroup.Item key={nanoid()} variant="primary">
                <li> {data.desc}</li>
            </ListGroup.Item>
        ))}
    </>
)
