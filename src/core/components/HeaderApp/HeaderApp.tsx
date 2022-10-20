// eslint-disable-next-line prettier/prettier
import * as React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import './HeaderApp.scss'
import coreUrls from '../../lib/core-urls'

const HeaderApp = observer(() => {
    return (
        <div className={'header-app'}>
            <Navbar expand={'sm'}>
                <Navbar.Brand className={'title'} href={coreUrls.DOMAIN}>
                    Pro zайм
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={'basic-navbar-nav'} />
                <Navbar.Collapse className={'justify-content-end'} id={'basic-navbar-nav'}>
                    <Nav>
                        <Nav.Link className={'icon'} href={'#'}>
                            <i title={'Подбор займа'} className="fa fa-sliders" aria-hidden="true" /> Подбор займа
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
})

export default HeaderApp
