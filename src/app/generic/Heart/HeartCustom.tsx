import React, {useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'
import {Heart, HeartFill} from "react-bootstrap-icons";
import electivesStore from "../../lib/store/pages/Electives-store";
import {useLocalStorage} from "usehooks-ts";


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

    const add = (val: never) => {
        setHeart(true)
        electivesStore.stateHeart.push(val)
        electivesStore.setHeart(electivesStore.heart + 1)
    }
    const deleteArr = (val) => {
        if (val.id !== -1) {
            electivesStore.stateHeart.splice(val.id, 1);
            heartLoc.splice(val.id, 1)

        }
        setHeart(false)
        electivesStore.setHeart(electivesStore.heart - 1)
    }

    return (
        <>

            {heart ?
                <HeartFill onClick={() => deleteArr(data)
                } className={'heart'}/>
                :
                <Heart onClick={() => add(data)
                } className={'heart'}/>
            }
        </>
    )
})

