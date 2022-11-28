import React, {useEffect, useState} from 'react'
import {observer, } from 'mobx-react-lite'
import electivesStore from "../../../lib/store/pages/Electives-store";
import {useLocalStorage} from 'usehooks-ts'
import {Button} from "react-bootstrap";
import ServiceCard from "../../../generic/ServiceCard/ServiceCard";

export default observer(() => {
    const [heart, setHeart] = useState([])
    const [heartLoc, setHeartLoc] = useLocalStorage('heart',[])

    useEffect(() => {
        const data = localStorage.getItem('heart')
        if (data) {
            setHeart(JSON.parse(data))
        }
    }, [])

    useEffect(() => {

        electivesStore.setToastBtn('Избранное')
    }, [])


    return (
        <>
            {
                heart.map((d)=>(
                  <ServiceCard data={d}/>
                ))
            }
        </>
    )
})

