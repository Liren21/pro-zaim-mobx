// eslint-disable-next-line prettier/prettier
import * as React from 'react'
import {Button, Nav, Navbar, Offcanvas} from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import './HeaderApp.scss'
import Scrollbar from 'react-scrollbars-custom'
import routes from '../../../app/lib/routes'
import Icons from '../../../app/generic/Img/Icon.svg'
import SearchBtn from "../../../app/generic/SearchBtn/SearchBtn";
const HeaderApp = observer(() => {
    return (
        <Scrollbar>
            <div className={'header-app'}>
                <Navbar variant={'light'} sticky="top" expand="md" collapseOnSelect>
                    <Navbar.Brand className={'title-left'} href={'#'+routes.HOME}>
                        Pro zайм
                        {/*<Button variant="light"><i className="fa fa-heart" aria-hidden="true"></i> Избранные</Button>{' '}*/}
                    </Navbar.Brand>
                    <Navbar.Toggle label={'меню'} aria-controls={'basic-navbar-nav'} />
                    <Navbar.Offcanvas
                        id={'offcanvasNavbar-expand-md'}
                        aria-labelledby={'offcanvasNavbarLabel-expand-md'}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={'offcanvasNavbarLabel-expand-md'}>
                                {/*<img style={{ width: '2rem' }} src={Icons} />*/}
                                Pro zайм
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link className={'header-btn-hone'} href={'#' + routes.HOME}>
                                    <i
                                        title={'Выгодные предложения'}
                                        className="fa fa-credit-card"
                                        aria-hidden="true"
                                    />{' '}
                                    Займ
                                </Nav.Link>
                                <Nav.Link className={'header-btn-calculate'} href={'#' + routes.LOAN_PORTFOLIO}>
                                    {' '}
                                    <i
                                        title={'Выгодные предложения'}
                                        className="fa  fa-bar-chart"
                                        aria-hidden="true"
                                    />{' '}
                                    Калькулятор
                                </Nav.Link>{' '}
                                <Nav.Link
                                    className={'header-btn-cprofile-offers'}
                                    href={'#' + routes.PROFITABLE_OFFERS}
                                >
                                    {' '}
                                    <i title={'Выгодные предложения'} className="fa fa-bolt" aria-hidden="true" />{' '}
                                    Выгодные предложения
                                </Nav.Link>
                                <Nav.Link className={'header-btn-upd-comp'} href={'#' + routes.UPD_COMP}>
                                    {' '}
                                    <i className="fa fa-exclamation-triangle" aria-hidden="true" /> Что нового
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Navbar.Brand className={'title-right'} href={'#'+routes.HOME}>
                        Pro zайм
                        {/*<Button variant="light"><i className="fa fa-heart" aria-hidden="true"></i> Избранные</Button>{' '}*/}
                    </Navbar.Brand>
                </Navbar>
            </div>
        </Scrollbar>
    )
})

export default HeaderApp
