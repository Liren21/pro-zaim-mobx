import React from 'react'
import {observer} from 'mobx-react-lite'
import {Bell, BellFill} from "react-bootstrap-icons";
import './CustomBell.scss'
import electivesStore from "../../../lib/store/pages/Electives-store";


export default observer(() => {


    return (
        <>
            <div className={'count'}>
                12
            </div>
            {electivesStore.toastBtn == 'Уведомления' ?
                <BellFill
                    style={{fontSize: '1.5rem', color: 'white'}}/>
                :
                <Bell
                    style={{fontSize: '1.5rem', color: 'white'}}/>}
        </>
    )
})

