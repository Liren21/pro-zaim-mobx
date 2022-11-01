import * as React from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Offcanvas } from 'react-bootstrap'
import './OffcanvasCustom.scss'
import { useState } from 'react'
import routes from '../../lib/routes'

export default observer(() => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <div className={'info-card'}>
            <Button style={{ borderRadius: '13px' }} variant="primary" onClick={handleShow}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement={'end'} backdrop="static">
                <Offcanvas.Header className={'ofc-header'} closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                    <br />
                    <Button className={'btn-menu'} onClick={handleClose} href={'#' + routes.PROFITABLE_OFFERS}>
                        <i title={'Выгодные предложения'} className="fa fa-bolt" aria-hidden="true" /> Выгодные
                        предложения
                    </Button>
                    <Button className={'btn-menu'} onClick={handleClose} href={'#' + routes.UPD_COMP}>
                        <i className="fa fa-exclamation-triangle" aria-hidden="true" /> Что нового
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
})
