import React, {useState, useRef, useEffect} from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import {CSSTransition} from 'react-transition-group'
import './LoanPortfolio.scss'
import {observer} from 'mobx-react-lite'
import RangeCustom from "../../../generic/RangeCustom/RangeCustom";
import electivesStoreStore from "../../../lib/store/pages/ElectivesStore-store";
import {nanoid} from "nanoid";
import ResultCard from "./ResultCard/ResultCard";


export default observer(() => {
    const [showMessage, setShowMessage] = useState(false)

    const nodeRef = useRef(null)



    useEffect(() => {

        setShowMessage(true)
    }, [])
    return (
        <CSSTransition in={showMessage} nodeRef={nodeRef} timeout={300} classNames="alert" unmountOnExit>
            <div ref={nodeRef}>
                <Row>
                    <Col  style={{display:"inline-block"}}>
                            <Card.Body>
                                    <Card.Title>Введите сумму  от</Card.Title>
                                    <RangeCustom tab={'min'}
                                                 onChangeBtn={electivesStoreStore.setMinNumRange}
                                                 minRange={100} maxRange={100000} key={nanoid()}/>
                                <br/>
                                <br/>

                                    <ResultCard/>

                            </Card.Body>

                    </Col>
                </Row>
            </div>
        </CSSTransition>
    )
})
