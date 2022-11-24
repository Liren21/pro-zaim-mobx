import React, {useState, useRef, useEffect} from 'react'
import {Alert, Card,} from 'react-bootstrap'
import {CSSTransition} from 'react-transition-group'
import './LoanPortfolio.scss'
import {observer} from 'mobx-react-lite'
import electivesStore from '../../../lib/store/pages/Electives-store'
import ResultCard from './ResultCard/ResultCard'

import FloatingLabelCustom from "../../../generic/FloatingLabelCustom/FloatingLabelCustom";
import Toaster from "../../../../core/lib/toaster/toaster";
import {toast} from "react-toastify";


export default observer(() => {
    const [showMessage, setShowMessage] = useState(false)
    const [mes, setMec] = useState('')

    const nodeRef = useRef(null)

    const changeVal = (value) => {
        setMec(value)
    }
    const clickNum = () => {
        if (Number(mes) < 100) {
            new Toaster({msg: 'По вашему запросу ничего не найдено', type: toast.TYPE.WARNING})
        } else {
            electivesStore.setMinNumRange(Number(mes))
        }
    }
    const clickNumSec = () => {
        electivesStore.setMinNumRange(Number(''))
        setMec('')
    }
    useEffect(() => {
        electivesStore.setToastBtn('Калькулятор')
        setShowMessage(true)
    }, [])

    return (
        <CSSTransition in={showMessage} nodeRef={nodeRef} timeout={300} classNames="alert" unmountOnExit>
            <div ref={nodeRef}>
                <Card.Body>
                    <br/>
                    <Card.Title> Калькулятор выбора займа</Card.Title>
                    <Alert key={'primary'} variant={'light'} className={'loan-portfolio-text'}>
                        Калькулятор предоставляет наилучший выбор МФО для займа
                    </Alert>
                    <br/>
                    <br/>
                    <FloatingLabelCustom type={'tel'} onclickBtn={clickNum} onclickBtnSecond={clickNumSec}
                                         label={'Сумма до'} value={mes}
                                         onChange={(value) => changeVal(value.target.value)}/>
                    <ResultCard/>
                </Card.Body>
            </div>
        </CSSTransition>
    )
})
