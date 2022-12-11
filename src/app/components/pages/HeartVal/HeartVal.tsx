import React, {useEffect, useState} from 'react'
import {observer,} from 'mobx-react-lite'
import electivesStore from "../../../lib/store/pages/Electives-store";
import ServiceCard from "../../../generic/ServiceCard/ServiceCard";
import {AnimationEffect} from "../../../generic/AnimationEffect/AnimationEffect";
import './HeartVal.scss'
import MsgEmpty from "../../../generic/MsgEmpty/MsgEmpty";

export default observer(() => {
    const [heart, setHeart] = useState([])
    const [state, setState] = useState(false)

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
                    <MsgEmpty text={'Вам пока что ничего не понравилось 😔'} />
            }
        </>
    )
})

