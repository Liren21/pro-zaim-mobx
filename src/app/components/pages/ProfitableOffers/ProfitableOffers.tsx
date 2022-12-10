import React, {useEffect, useRef, useState} from 'react'
import {observer} from 'mobx-react-lite'
import './ProfitableOffers.scss'

import {Card} from 'react-bootstrap'

import {nanoid} from 'nanoid'


import {bestIdea} from '../../../generic/Data/DataCard'
import ToastCustom from '../../../generic/ToastCustom/ToastCustom'
import electivesStore from "../../../lib/store/pages/Electives-store";
import {AnimationEffect} from "../../../generic/AnimationEffect/AnimationEffect";

export default observer(() => {


    useEffect(() => {
        electivesStore.setToastBtn('Предложения')

    }, [])
    return (
        <AnimationEffect>
            <ToastCustom/>
            {bestIdea.map((data) => (
                <Card style={{transform: 'none'}} key={nanoid()}>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Body>{data.body}</Card.Body>
                    <Card.Img className={'profitable-offers'} src={data.photo}/>
                </Card>
            ))}
        </AnimationEffect>
    )
})
