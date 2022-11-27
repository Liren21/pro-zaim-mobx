import React, {useEffect, useState} from 'react'
import {observer, } from 'mobx-react-lite'
import electivesStore from "../../../lib/store/pages/Electives-store";
import {useLocalStorage} from 'usehooks-ts'
import {Button} from "react-bootstrap";

export default observer(() => {
    const [heart, setHeart] = useState([
        {name:'ddddd'}
    ])
    const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', true)

    const toggleTheme = () => {
        setDarkTheme((prevValue: boolean) => !prevValue)
    }

    useEffect(() => {

        electivesStore.setToastBtn('Избранное')
    }, [])


    return (
        <>
            {
                heart.map((d)=>(
                   <Button onClick={toggleTheme}>
                       d.name
                   </Button>
                ))
            }
        </>
    )
})

