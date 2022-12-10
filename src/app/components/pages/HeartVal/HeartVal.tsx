import React, {useEffect, useState} from 'react'
import {observer,} from 'mobx-react-lite'
import electivesStore from "../../../lib/store/pages/Electives-store";
import ServiceCard from "../../../generic/ServiceCard/ServiceCard";
import {AnimationEffect} from "../../../generic/AnimationEffect/AnimationEffect";
import './HeartVal.scss'

export default observer(() => {
    const [heart, setHeart] = useState([])
    const [state, setState] = useState(false)
    console.log(electivesStore.heart)
    useEffect(() => {
        const data = localStorage.getItem('heart')
        if (data) {
            setHeart(JSON.parse(data))
            setState(true)
        }
    }, [electivesStore.heart])

    useEffect(() => {
        electivesStore.setToastBtn('Избранное')
        setState(false)
    }, [state])


    return (
        <>
            {
                heart.length !== 0 ?
                    <AnimationEffect>
                        {
                            heart.map((d) => (
                                <ServiceCard data={d}/>
                            ))
                        }
                    </AnimationEffect>
                    :
                    <MsgEmpty/>
            }
        </>
    )
})

const MsgEmpty = observer(() => (
    <AnimationEffect>
        <div className={'msg-empty'}> Пусто 😒</div>
    </AnimationEffect>
))
