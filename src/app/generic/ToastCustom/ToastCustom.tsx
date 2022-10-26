import React from 'react'

import Toast from 'react-bootstrap/Toast'
import { observer } from 'mobx-react-lite'
import './ToastCustom.scss'
import { ToastContainer } from 'react-bootstrap'
import electivesStoreStore from '../../lib/store/pages/ElectivesStore-store'

export default observer(() => {
    return (
        <>
            <div>
                <ToastContainer position={'top-end'}>
                    <Toast
                        onClose={() => electivesStoreStore.setStateToastHome(false)}
                        show={electivesStoreStore.stateToastHome}
                        delay={4000}
                        autohide
                    >
                        <Toast.Header className={'toast-custom-header'} closeButton={false}>
                            <strong className="me-auto">Pro Zайм</strong>
                        </Toast.Header>
                        <Toast.Body>{electivesStoreStore.messageToastHome}</Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
        </>
    )
})
