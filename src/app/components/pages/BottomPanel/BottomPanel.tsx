import React from 'react'
import {observer} from 'mobx-react-lite'
import './BottomPanel.scss'
import {Button, Col, Row} from 'react-bootstrap'
import routes from '../../../lib/routes'
import {nanoid} from 'nanoid'
import electivesStore from '../../../lib/store/pages/Electives-store'
import {
    Bell,
    BellFill,
    Calculator,
    CalculatorFill,
    HandThumbsUp, HandThumbsUpFill,
    House,
    HouseFill,
} from 'react-bootstrap-icons';



export default observer(() => {
    const btnForm = [
        {
            title: 'Займ',
            icon: <House className={'icons'}/>,
            iconAlt: <HouseFill className={'icons'}/>,
            href: '#' + routes.HOME,
        },
        {
            title: 'Калькулятор',
            icon: <Calculator className={'icons'}/>,
            iconAlt: <CalculatorFill className={'icons'}/>,
            href: '#' + routes.LOAN_PORTFOLIO,
        },

        {
            title: 'Выгодные предложения',
            icon: <HandThumbsUp className={'icons'}/>,
            iconAlt: <HandThumbsUpFill className={'icons'}/>,
            href: '#' + routes.PROFITABLE_OFFERS,
        },
        {
            title: 'Уведомление',
            icon: <Bell className={'icons'}/>,
            iconAlt: <BellFill className={'icons'}/>,
            href: '#' + routes.NOTIFICATION,
        },
    ]
    return (
        <div className={'bottom-panel'}>
            <Row>
                {btnForm.map((data) => (
                    <Col key={nanoid()} md={3} sm={3} xs={3}>
                        <Button
                            href={data.href}
                            variant={electivesStore.toastBtn == data.title ? 'outline-primary' : 'outline-secondary'}
                        >
                            <div>
                                <i className="bi bi-bar-chart-line"></i>
                                {electivesStore.toastBtn !== data.title ? data.icon : data.iconAlt}
                            </div>
                            {/*{data.title}*/}
                        </Button>

                    </Col>
                ))}
            </Row>
        </div>
    )
})
