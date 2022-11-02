import React from 'react'

import Toast from 'react-bootstrap/Toast'
import { observer } from 'mobx-react-lite'
import './ToastCustom.scss'
import { ToastContainer } from 'react-bootstrap'
import electivesStore from '../../lib/store/pages/Electives-store'

export default observer(() => {
    return (
        <>
            <div>
                <ToastContainer position={'top-end'}>
                    <Toast
                        onClose={() => electivesStore.setStateToastHome(false)}
                        show={electivesStore.stateToastHome}
                        delay={4000}
                        autohide
                    >
                        <Toast.Header className={'toast-custom-header'} closeButton={false}>
                            <strong className="me-auto">Pro Zайм</strong>
                        </Toast.Header>
                        <Toast.Body>{electivesStore.messageToastHome}</Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
        </>
    )
})
