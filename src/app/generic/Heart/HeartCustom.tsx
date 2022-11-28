import React, {useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'
import {Heart, HeartFill} from "react-bootstrap-icons";
import electivesStore from "../../lib/store/pages/Electives-store";
import {useLocalStorage} from "usehooks-ts";


interface IServiceCard {
    data: never
}

export default observer(({data}: IServiceCard) => {

    const [heart, setHeart] = useState(false)
    const [heartLoc, setHeartLoc] = useLocalStorage('heart',[])
    const [heartLocOne, setHeartLocOne] = useLocalStorage('heart',[])


    useEffect(() => {
        const data = localStorage.getItem('heart')
        if (data) {
            setHeartLocOne(JSON.parse(data))
        }
    }, [])

    useEffect(()=>{
        setHeartLoc(electivesStore.stateHeart)
    },[heart])

    const add = (val: never) => {
        setHeart(true)
        electivesStore.stateHeart.push(val)
        heartLoc.push(val)
    }
    const deleteArr = (val) => {
        if (val.id !== -1) {
            electivesStore.stateHeart.splice(val.id, 1);
            heartLoc.splice(val.id,1)
        }
        setHeart(false)

    }
    return (
        <>
            {heart?

                <HeartFill onClick={() => deleteArr(data)
                } className={'heart'}/>
                :
                <Heart onClick={() => add(data)
                } className={'heart'}/>
            }
        </>
    )
})

