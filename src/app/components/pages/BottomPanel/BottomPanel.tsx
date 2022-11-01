import React from 'react'
import { observer } from 'mobx-react-lite'
import './BottomPanel.scss'
import { Button, Col, Row } from 'react-bootstrap'
import routes from '../../../lib/routes'

export default observer(() => {
    return (
        <div className={'bottom-panel'}>
            <Row style={{ display: 'inline-block' }}>
                <Col md={4} sm={4} xs={4} style={{ display: 'inline-block' }}>
                    <Button href={'#' + routes.HOME} className={'btn-bottom-panel'} variant="light">
                        <div>
                            <i className="fa fa-credit-card" aria-hidden="true" />
                        </div>
                        Займы
                    </Button>{' '}
                </Col>
                <Col md={4} sm={4} xs={4} style={{ display: 'inline-block' }}>
                    <Button href={'#' + routes.LOAN_PORTFOLIO} className={'btn-bottom-panel'} variant="light">
                        <div>
                            <i className="fa fa-bar-chart" aria-hidden="true" />
                        </div>
                        Калькулято
                    </Button>{' '}
                </Col>
                <Col md={4} sm={4} xs={4} style={{ display: 'inline-block' }}>
                    <Button className={'btn-bottom-panel'} variant="light">
                        <div>
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                        </div>
                        Избранное
                    </Button>{' '}
                </Col>
            </Row>
        </div>
    )
})
