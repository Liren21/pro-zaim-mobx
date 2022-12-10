import React from 'react'
import {observer} from 'mobx-react-lite'
import './BottomPanel.scss'
import {Button, Col, Row} from 'react-bootstrap'
import routes from '../../../lib/routes'
import {nanoid} from 'nanoid'
import electivesStore from '../../../lib/store/pages/Electives-store'
import {
    Calculator,
    CalculatorFill,
    HandThumbsUp, HandThumbsUpFill, Heart, HeartFill,
    House,
    HouseFill,
} from 'react-bootstrap-icons';



export default observer(() => {
    const btnForm = [
        {
            title: 'Хранилище',
            icon: <House  className={'icons-fill'}/>,
            iconAlt: <HouseFill className={'icons'}/>,
            href: '#' + routes.HOME,
        },
        {
            title: 'Калькулятор',
            icon: <Calculator  className={'icons-fill'}/>,
            iconAlt: <CalculatorFill className={'icons'}/>,
            href: '#' + routes.LOAN_PORTFOLIO,
        },
        {
            title: 'Избранное',
            icon: <Heart  className={'icons-fill'}/>,
            iconAlt: <HeartFill className={'icons'}/>,
            href: '#' + routes.HEART,
        },

        {
            title: 'Предложения',
            icon: <HandThumbsUp  style={{textAlign:'left'}} className={'icons-fill'}/>,
            iconAlt: <HandThumbsUpFill className={'icons'}/>,
            href: '#' + routes.PROFITABLE_OFFERS,
        },
    ]
    return (
        <div className={'bottom-panel'}>
            <Row>
                {btnForm.map((data) => (
                    <Col key={nanoid()} md={3} sm={3} xs={3}>
                        <Button
                            variant={"outline-primary"}
                            href={data.href}
                        >
                                {electivesStore.toastBtn !== data.title ? data.icon : data.iconAlt}
                        </Button>

                    </Col>
                ))}
            </Row>
        </div>
    )
})
