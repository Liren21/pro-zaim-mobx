import * as React from 'react'
import {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import InfoCard from './InfoCard/InfoCard'

export default observer(() => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div className={'info'}>
            <Button
                style={{float: 'left', background: '#e7f1ff', color: '#0d6efd', borderColor: '#e7f1ff'}}
                onClick={handleShow}
                variant="light"
            >
                Информация
            </Button>

            <Modal centered show={show} onHide={handleClose}>
                <Modal.Body>
                    <InfoCard/>
                </Modal.Body>
            </Modal>
        </div>
    )
})
