import React from 'react'
import {observer} from 'mobx-react-lite'
import './MsgEmpty.scss'
import {AnimationEffect} from "../AnimationEffect/AnimationEffect";


interface IMsgEmpty {
    text: string
}

export default observer(({text}: IMsgEmpty) => {


    return (
        <AnimationEffect>
            <div className={'msg-empty'}> {text}</div>
        </AnimationEffect>
    )
})

