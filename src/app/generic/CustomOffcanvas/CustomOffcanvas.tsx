import React, {useState} from 'react'
import {observer} from 'mobx-react-lite'
import {Button, Nav, Offcanvas} from 'react-bootstrap'
import {
    CashCoin,
    Collection,
    EnvelopeCheck,
    GraphUp,
    QuestionCircle
} from "react-bootstrap-icons";
import routes from "../../lib/routes";

interface ICOffcanvas {
    open: boolean
    close: boolean
    title: string
    icon: any
}

export default observer(({ open, close, title, icon}: ICOffcanvas) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

                <Button variant="outline-dark" onClick={open ? () => setShow(open) : handleShow}>
                    {icon}
                    <div>
                        {title}
                    </div>
                </Button>

            <Offcanvas show={show} placement={'end'} onHide={close ? setShow(close) : handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Еще</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-start flex-grow-1 pe-3">
                        <Nav.Link className={'header-btn-hone'} href={'#' + routes.HOME}>
                            <Collection className={'icons'}/>
                            Займ
                        </Nav.Link>
                        <Nav.Link className={'header-btn-calculate'} href={'#' + routes.LOAN_PORTFOLIO}>
                            <GraphUp className={'icons'}/>
                            Калькулятор
                        </Nav.Link>{' '}
                        <Nav.Link
                            className={'header-btn-cprofile-offers'}
                            href={'#' + routes.PROFITABLE_OFFERS}
                        >
                            <CashCoin className={'icons'}/> Выгодные предложения
                        </Nav.Link>
                        <Nav.Link className={'header-btn-upd-comp'} href={'#' + routes.UPD_COMP}>
                            <QuestionCircle className={'icons'}/> Что нового
                        </Nav.Link>
                        <Nav.Link className={'header-btn-upd-comp'} href={'#' + routes.UPD_COMP}>
                            <EnvelopeCheck className={'icons'}/> Связь с разработчиком
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
})
