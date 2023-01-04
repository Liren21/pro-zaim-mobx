import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import './ProfitableOffers.scss'
import {Alert} from 'react-bootstrap'
import electivesStore from "../../../lib/store/pages/Electives-store";
import {AnimationEffect} from "../../../generic/AnimationEffect/AnimationEffect";
import {nanoid} from "nanoid";



export default observer(() => {


    useEffect(() => {
        electivesStore.setToastBtn('Контакты ')

    }, [])
    return (
        <AnimationEffect>
            <Alert style={{border: 'none', borderRadius: '12px', textAlign: 'center'}} key={nanoid()}
                   variant={'success'}>
                Почта: <a href="mailto:ITgroup55@yandex.ru"> ITgroup55@yandex.ru</a>
            </Alert>
            <br/>
        </AnimationEffect>
    )
})
