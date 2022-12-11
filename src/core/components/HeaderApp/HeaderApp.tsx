// eslint-disable-next-line prettier/prettier
import * as React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import './HeaderApp.scss'
import Scrollbar from 'react-scrollbars-custom'
import routes from '../../../app/lib/routes'
// @ts-ignore
import layer from '../../../app/generic/Img/layer.png'
import {Bell, BellFill, Calculator, CashCoin, Collection, QuestionSquare} from "react-bootstrap-icons";
import electivesStore from "../../../app/lib/store/pages/Electives-store";
import CustomBell from "../../../app/components/pages/CustomBell/CustomBell";

const HeaderApp = observer(() => {
    return (
        <Scrollbar>
            <div className={'header-app'}>
                <Navbar variant={'dark'} sticky="top" expand="md" collapseOnSelect>
                    <Navbar.Brand className={'title-left'} href={'#' + routes.HOME}>
                        Хранилище
                        {/*<Button variant="light"><i className="fa fa-heart" aria-hidden="true"></i> Избранные</Button>{' '}*/}
                    </Navbar.Brand>
                    <Nav className={'title-left'}>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link className={'header-btn-hone'} href={'#' + routes.HOME}>
                                <Collection className={'icons'}/> Займ
                            </Nav.Link>
                            <Nav.Link className={'header-btn-calculate'} href={'#' + routes.LOAN_PORTFOLIO}>
                                {' '}
                                <Calculator className={'icons'}/> Калькулятор
                            </Nav.Link>{' '}
                            <Nav.Link
                                className={'header-btn-cprofile-offers'}
                                href={'#' + routes.PROFITABLE_OFFERS}
                            >
                                <CashCoin className={'icons'}/> Выгодные предложения
                            </Nav.Link>
                            <Nav.Link className={'header-btn-upd-comp'} href={'#' + routes.UPD_COMP}>
                                <QuestionSquare className={'icons'}/> Что нового
                            </Nav.Link>
                        </Nav>
                    </Nav>
                    <Navbar.Brand className={'title-right'} href={'#' + routes.HOME}>
                        <img
                            src={layer}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />

                    </Navbar.Brand>
                    <Navbar.Brand className={'title-right'} href={'#' + routes.HOME}>
                        {electivesStore.toastBtn}
                    </Navbar.Brand>
                    <Navbar.Brand className={'title-right'}>
                        <a  href={'#' + routes.NOTIFICATION}>
                            <CustomBell/>
                        </a>
                    </Navbar.Brand>
                </Navbar>
            </div>
        </Scrollbar>
    )
})

export default HeaderApp
