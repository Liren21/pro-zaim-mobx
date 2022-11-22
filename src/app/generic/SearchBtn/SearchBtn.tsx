import React, {useState} from 'react'
import {observer} from 'mobx-react-lite'
import './SearchBtn.scss'


import FloatingLabelCustom from "../FloatingLabelCustom/FloatingLabelCustom";
import electivesStore from "../../lib/store/pages/Electives-store";



export default observer(() => {
    const [mes, setMec] = useState('')


    const changeSearch = () => {
        electivesStore.setSearch(mes)
    }
    // const find = () => {
    //     return arr.filter(function (value) {
    //         return value === find;
    //     });
    // }
    console.log(electivesStore.search)
    return (
        <>

            <FloatingLabelCustom label={'Поиск'} value={electivesStore.search}
                                 onChange={(e) => electivesStore.setSearch(e.target.value)}
                                 onclickBtnSecond={changeSearch} onclickBtn={() => setMec('')}/>

        </>
    )
})
