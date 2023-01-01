import React, {useEffect, useRef, useState} from 'react'
import {CSSTransition} from 'react-transition-group'
import {observer} from 'mobx-react-lite'
import './AnimationEffect.scss'



export const AnimationEffect:React.FC =observer(({children}) => {
    const [showMessage, setShowMessage] = useState(false)
    const nodeRef = useRef(null)

    useEffect(() => {
        setShowMessage(true)


    }, [])

    return (
        <CSSTransition in={showMessage} nodeRef={nodeRef} timeout={300} classNames="alert" unmountOnExit>
            <div ref={nodeRef} >
                {children}
            </div>
        </CSSTransition>
    )
})
