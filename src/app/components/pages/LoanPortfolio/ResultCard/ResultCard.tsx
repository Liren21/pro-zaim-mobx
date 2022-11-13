import React, {useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'
import {Button, Card, Col, Row} from 'react-bootstrap'
import {nanoid} from 'nanoid'
import electivesStore from '../../../../lib/store/pages/Electives-store'
import {data} from '../../../../generic/Data/DataCard'
import Info from '../../Modal/Info/Info'
import './ResultCard.scss'
import ModalLoader from '../../../../generic/ModalLoader/ModalLoader'
import ServiceCard from "../../../../generic/ServiceCard/ServiceCard";

export default observer(() => {
    const [heart, setHeart] = useState(false)
    const redirect = (val) => {
        electivesStore.setLink(val)
    }
    useEffect(() => {
        electivesStore.setToastBtn('Калькулятор')
        electivesStore.setStateLoader(false)
    }, [])
    return (
        <>
            <ModalLoader/>
            <Row>
                {data.map((data) => (
                    <>
                        {
                            data.min - 1 >= electivesStore.minNumRange ?
                                null :
                                <Col md={3}>
                                    <ServiceCard data={data} key={nanoid()}/>
                                </Col>
                        }
                    </>
                ))}
            </Row>
        </>
    )
})
