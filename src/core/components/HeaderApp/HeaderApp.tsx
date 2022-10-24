// eslint-disable-next-line prettier/prettier
import * as React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import './HeaderApp.scss'
import coreUrls from '../../lib/core-urls'
import Scrollbar from "react-scrollbars-custom";
import OffcanvasCustom from "../../../app/generic/OffcanvasCustom/OffcanvasCustom";

const HeaderApp = observer(() => {


    return (
        <Scrollbar>
            <div className={'header-app'}>
                <Navbar sticky="top" expand="sm" collapseOnSelect>
                    <Navbar.Brand className={'title'} href={coreUrls.DOMAIN}>
                        Pro zайм
                    </Navbar.Brand>
                    <div className={'mob-offcanvas'}>
                        <OffcanvasCustom/>
                    </div>
                    <Navbar.Toggle aria-controls={'basic-navbar-nav'}/>
                    <Navbar.Collapse  className={'justify-content-end'} id={'basic-navbar-nav'}>
                        <Nav>
                            <OffcanvasCustom/>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </Scrollbar>
    )
})

export default HeaderApp
