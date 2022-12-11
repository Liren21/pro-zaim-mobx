import React, {useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'
import electivesStore from "../../../lib/store/pages/Electives-store";
import { notification} from "../../../generic/Data/DataCard";
import './Notification.scss'
import {AnimationEffect} from "../../../generic/AnimationEffect/AnimationEffect";
import NotificationBody from "./NotificationBody/NotificationBody";
import {nanoid} from "nanoid";


export default observer(() => {
    const [state, setState] = useState([])


    useEffect(() => {
        const data = localStorage.getItem('delNotification')
        if (data) {
            setState(JSON.parse(data))
        }
    }, [])
    useEffect(() => {
        electivesStore.setToastBtn('Уведомления')
    }, [])



    return (
        <AnimationEffect>
            {
                notification.map((d) => (
                    <NotificationBody data={d} key={nanoid()} id={d.id} lvl={d.lvl} text={d.text}/>
                ))
            }
        </AnimationEffect>
    )
})
