import * as React from 'react'
import {observer} from 'mobx-react-lite'
import {Button,  Offcanvas} from 'react-bootstrap'
import './OffcanvasCustom.scss'
import {useState} from "react";
import routes from "../../lib/routes";

export default observer(() => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className={'info-card'}>
            <Button  style={{borderRadius: '13px'}} variant="primary" onClick={handleShow}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </Button>

            <Offcanvas show={show} onHide={handleClose} backdrop="static">
                <Offcanvas.Header className={'ofc-header'} closeButton>
                    <Offcanvas.Title style={{color:'#fff'}}>Меню</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Button className={'btn-menu'} onClick={handleClose} href={'#' + routes.HOME}><i className="fa fa-home" aria-hidden="true"/> Главная</Button>
                    <Button className={'btn-menu'} onClick={handleClose} href={'#' + routes.LOAN_PORTFOLIO}><i title={'Подбор займа'} className="fa fa-sliders" aria-hidden="true"/> Подбор займа</Button>
                    <Button className={'btn-menu'} onClick={handleClose} href={'#' + routes.PERSON_DATA}> <i title={'Мои данные'} className="fa fa-address-card" aria-hidden="true"/> Мои данные</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
)
})
