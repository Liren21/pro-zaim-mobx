import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import {Col, Row} from 'react-bootstrap'
import {nanoid} from 'nanoid'
import electivesStore from '../../../../lib/store/pages/Electives-store'
import {data} from '../../../../generic/Data/DataCard'

import './ResultCard.scss'
import ModalLoader from '../../../../generic/ModalLoader/ModalLoader'
import ServiceCard from "../../../../generic/ServiceCard/ServiceCard";
// import Toaster from "../../../../../core/lib/toaster/toaster";
// import {toast} from "react-toastify";

export default observer(() => {

    useEffect(() => {
        electivesStore.setToastBtn('Калькулятор')
        electivesStore.setStateLoader(false)
    }, [])
    // const name = () => {
    //     new Toaster({msg:'1212',type:toast.TYPE.ERROR})
    // }
    return (
        <>
            <ModalLoader/>
            <Row>
                {data.map((data) => (
                    data.min - 1 > electivesStore.minNumRange ?
                       null
                        :
                        <Col key={nanoid()} md={3}>
                            <ServiceCard data={data} key={nanoid()}/>
                        </Col>
                ))}
            </Row>
        </>
    )
})
