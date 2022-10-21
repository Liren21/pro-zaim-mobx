import React, {useEffect, useRef, useState} from 'react'
import {observer} from 'mobx-react-lite'
import './TransitionForm.scss'
import {CSSTransition} from "react-transition-group";
interface ITransitionForm {
    component?:any
}
export default observer(({component}:ITransitionForm) => {
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
            {component}
        </CSSTransition>
    )
})
