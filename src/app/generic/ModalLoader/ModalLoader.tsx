import React from 'react'
import { observer } from 'mobx-react-lite'

import { Modal, Spinner } from 'react-bootstrap'

import electivesStoreStore from '../../lib/store/pages/ElectivesStore-store'
import './ModalLoader.scss'

export default observer(() => {
    return (
        <div>
            <Modal
                centered
                show={electivesStoreStore.stateLoader}
                onHide={() => electivesStoreStore.setStateLoader(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body className={'modal-loader'}>
                    <Spinner animation="border" variant="light" />
                    <div>Загрузка...</div>
                </Modal.Body>
            </Modal>
        </div>
    )
})
