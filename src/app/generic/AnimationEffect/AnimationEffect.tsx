import React, {useEffect, useRef, useState} from 'react'
import {CSSTransition} from 'react-transition-group'
import {observer} from 'mobx-react-lite'
import Card from 'react-bootstrap/Card'
import './AnimationEffect.scss'



export const AnimationEffect:React.FC =observer(({children}) => {
    const [showMessage, setShowMessage] = useState(false)
    const nodeRef = useRef(null)

    useEffect(() => {
        setShowMessage(true)


    }, [])

    return (
        <CSSTransition in={showMessage} nodeRef={nodeRef} timeout={300} classNames="alert" unmountOnExit>
            <Card.Body ref={nodeRef} className={'home-form'}>
                {children}
            </Card.Body>
        </CSSTransition>
    )
})
