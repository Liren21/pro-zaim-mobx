// eslint-disable-next-line prettier/prettier
import * as React from 'react'
import { Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import './HeaderApp.scss'
import Scrollbar from 'react-scrollbars-custom'
import routes from '../../../app/lib/routes'

const HeaderApp = observer(() => {
    return (
        <Scrollbar>
            <div className={'header-app'}>
                <Navbar variant={'dark'} sticky="top" expand="lg" collapseOnSelect>
                    <Navbar.Brand className={'title'} href={routes.HOME}>
                        Pro zайм
                    </Navbar.Brand>
                    <Navbar.Toggle label={'меню'} aria-controls={'basic-navbar-nav'} />
                    <Navbar.Offcanvas
                        id={'offcanvasNavbar-expand-lg'}
                        aria-labelledby={'offcanvasNavbarLabel-expand-lg'}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title style={{ color: '#fff' }} id={'offcanvasNavbarLabel-expand-lg'}>
                                Меню
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
                </Navbar>
            </div>
        </Scrollbar>
    )
})

export default HeaderApp
