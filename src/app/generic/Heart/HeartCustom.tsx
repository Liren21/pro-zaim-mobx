import React, {useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'

import electivesStore from "../../lib/store/pages/Electives-store";
import {useLocalStorage} from "usehooks-ts";

import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './HeartCustom.scss'
const faPropIconFaHeart = faHeart;

interface IServiceCard {
    data: any
}

export default observer(({data}: IServiceCard) => {

    const [heart, setHeart] = useState(false)
    const [heartLoc] = useLocalStorage('heart', [])


    useEffect(() => {
        const data = localStorage.getItem('heart')
        if (data) {
            electivesStore.setStateHeart(JSON.parse(data))
        }

    }, [])
    useEffect(() => {
        localStorage.setItem('heart', JSON.stringify(electivesStore.stateHeart))
    })


    useEffect(() => {
        electivesStore.stateHeart.filter((d) => {
            if (d.name == data.name) {
                setHeart(true)
            }
        })
    }, [heart])

    const add = (val) => {
        setHeart(true)
        electivesStore.stateHeart.push(val)
        electivesStore.setHeart(electivesStore.heart + 1)
    }
    const deleteArr = (val) => {
        const index = electivesStore.stateHeart.findIndex(el => el.name === val.name);
        electivesStore.stateHeart.splice(index, 1);
        heartLoc.splice(index, 1)
        setHeart(false)
        electivesStore.setHeart(electivesStore.heart - 1)
    }

    return (
        <>

            {heart ?
                <FontAwesomeIcon icon={faPropIconFaHeart} onClick={() => deleteArr(data)} className={'heart'}/>
                :
                <FontAwesomeIcon icon={faPropIconFaHeart} onClick={() => add(data)} className={'heart-off'}/>
            }
        </>
    )
})

