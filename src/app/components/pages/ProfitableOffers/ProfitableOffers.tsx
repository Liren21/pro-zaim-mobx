import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import './ProfitableOffers.scss'

import {Card} from 'react-bootstrap'

import {nanoid} from 'nanoid'


import {bestIdea} from '../../../generic/Data/DataCard'
import electivesStore from "../../../lib/store/pages/Electives-store";
import {AnimationEffect} from "../../../generic/AnimationEffect/AnimationEffect";
import MsgEmpty from "../../../generic/MsgEmpty/MsgEmpty";

export default observer(() => {


    useEffect(() => {
        electivesStore.setToastBtn('Предложения')

    }, [])
    return (
        <AnimationEffect>

            {
                bestIdea.length !== 0 ?
                    <>
                        {bestIdea.map((data) => (
                            <Card style={{transform: 'none'}} key={nanoid()}>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Body>{data.body}</Card.Body>
                                <Card.Img className={'profitable-offers'} src={data.photo}/>
                            </Card>
                        ))}
                    </>
                    :
                    <MsgEmpty text={'Пусто 😒'}/>
            }
        </AnimationEffect>
    )
})
