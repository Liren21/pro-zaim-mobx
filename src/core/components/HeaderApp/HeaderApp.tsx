// eslint-disable-next-line prettier/prettier
import * as React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import './HeaderApp.scss'
import coreUrls from '../../lib/core-urls'
import routes from "../../../app/lib/routes";
import {useState} from "react";
import Scrollbar from "react-scrollbars-custom";

const HeaderApp = observer(() => {


    return (
        <Scrollbar>
            <div className={'header-app'}>
                <Navbar  sticky="top" expand="sm" collapseOnSelect>
                    <Navbar.Brand className={'title'} href={coreUrls.DOMAIN}>
                        Pro zайм
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={'basic-navbar-nav'} />
                    <Navbar.Collapse  className={'justify-content-end'} id={'basic-navbar-nav'}>
                        <Nav >
                            <Nav.Link  className={'icon'}  href={'#'+routes.HOME}>
                                <i className="fa fa-home" aria-hidden="true"/> Главная
                            </Nav.Link>  <Nav.Link className={'icon'}  href={'#'+routes.LOAN_PORTFOLIO}>
                            <i title={'Подбор займа'} className="fa fa-sliders" aria-hidden="true" /> Подбор займа
                        </Nav.Link>
                            <Nav.Link className={'icon'}  href={'#'+routes.PERSON_DATA}>
                                <i title={'Мои данные'} className="fa fa-address-card" aria-hidden="true"/> Мои данные
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </Scrollbar>
    )
})

export default HeaderApp
