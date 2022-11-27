import React, { useState} from 'react'
import {observer} from 'mobx-react-lite'
import {Heart, HeartFill} from "react-bootstrap-icons";
import electivesStore from "../../lib/store/pages/Electives-store";



interface IServiceCard {
    data: never
}

export default observer(({data}: IServiceCard) => {

    const [heart, setHeart] = useState(false)

    console.log(electivesStore.stateHeart)
    const add = (val: never) => {
        setHeart(true)
        electivesStore.stateHeart.push(val)
    }
    const deleteArr = (val) => {
        if (val.id !== -1) {
            electivesStore.stateHeart.splice(val.id, 1);
        }
        setHeart(false)

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

