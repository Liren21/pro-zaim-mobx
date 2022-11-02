import React from 'react'
import { observer } from 'mobx-react-lite'
import './BottomPanel.scss'
import { Button, Col, Row } from 'react-bootstrap'
import routes from '../../../lib/routes'
import { nanoid } from 'nanoid'
import electivesStore from '../../../lib/store/pages/Electives-store'

export default observer(() => {
    const btnForm = [
        {
            title: 'Займ',
            icon: 'fa fa-credit-card',
            href: '#' + routes.HOME,
        },
        {
            title: 'Калькулятор',
            icon: 'fa fa-bar-chart',
            href: '#' + routes.LOAN_PORTFOLIO,
        },
    ]
    return (
        <div className={'bottom-panel'}>
            <Row style={{ display: 'inline-block' }}>
                {btnForm.map((data) => (
                    <Col key={nanoid()} md={4} sm={4} xs={4} style={{ display: 'inline-block' }}>
                        <Button
                            href={data.href}
                            className={
                                electivesStore.toastBtn == data.title ? 'btn-bottom-panel-active' : 'btn-bottom-panel'
                            }
                            variant="light"
                        >
                            <div>
                                <i className={data.icon} aria-hidden="true" />
                            </div>
                            {data.title}
                        </Button>
                    </Col>
                ))}
            </Row>
        </div>
    )
})
