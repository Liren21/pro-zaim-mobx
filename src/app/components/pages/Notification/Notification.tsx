import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import electivesStore from "../../../lib/store/pages/Electives-store";
import {notification} from "../../../generic/Data/DataCard";
import './Notification.scss'
import {AnimationEffect} from "../../../generic/AnimationEffect/AnimationEffect";
import NotificationBody from "./NotificationBody/NotificationBody";
import {useLocalStorage} from "usehooks-ts";
import {nanoid} from "nanoid";


export default observer(() => {

    console.log(1)
    useEffect(() => {
        electivesStore.setToastBtn('Уведомления')
    }, [])

    return (
        <AnimationEffect>
            {
                notification.map((d) => (
                    <NotificationBody key={nanoid()} id={d.id} lvl={d.lvl} text={d.text}/>
                ))
            }
        </AnimationEffect>
    )
})
