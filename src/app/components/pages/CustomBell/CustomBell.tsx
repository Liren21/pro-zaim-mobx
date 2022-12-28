import React from 'react'
import {observer} from 'mobx-react-lite'
import './CustomBell.scss'
import electivesStore from "../../../lib/store/pages/Electives-store";
import {faBell} from "@fortawesome/free-solid-svg-icons/faBell";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const faPropIconFaBell = faBell;

export default observer(() => {


    return (
        <>
            <div className={'count'}>
                12
            </div>
            {electivesStore.toastBtn == 'Уведомления' ?
                <FontAwesomeIcon icon={faPropIconFaBell} style={{fontSize: '1.5rem', color: 'white'}} />
                :
                <FontAwesomeIcon icon={faPropIconFaBell} style={{fontSize: '1.5rem', color: 'white'}} />
            }
        </>
    )
})

