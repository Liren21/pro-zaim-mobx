import React from 'react'
import {observer} from 'mobx-react-lite'
import './BottomPanel.scss'
import {Button, Col, Row} from 'react-bootstrap'
import routes from '../../../lib/routes'
import {nanoid} from 'nanoid'
import electivesStore from '../../../lib/store/pages/Electives-store'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import {faCalculator} from "@fortawesome/free-solid-svg-icons/faCalculator";
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons/faThumbsUp";

const faPropIconFaHouse = faHouse;
const faPropIconOneFaCalculator = faCalculator;
const faPropIconOneFaHeart = faHeart;
const faPropIconFaThumbsUp = faThumbsUp;
export default observer(() => {
    const btnForm = [
        {
            title: 'Хранилище',
            icon: <FontAwesomeIcon icon={faPropIconFaHouse} />,
            href: '#' + routes.HOME,
        },
        {
            title: 'Калькулятор',
            icon: <FontAwesomeIcon icon={faPropIconOneFaCalculator}/>,
            href: '#' + routes.LOAN_PORTFOLIO,
        },
        {
            title: 'Избранное',
            icon: <FontAwesomeIcon icon={faPropIconOneFaHeart} />,
            href: '#' + routes.HEART,
        },

        {
            title: 'Предложения',
            icon: <FontAwesomeIcon icon={faPropIconFaThumbsUp} />,
            href: '#' + routes.PROFITABLE_OFFERS,
        },
    ]
    return (
        <div className={'bottom-panel'}>
            <Row>
                {btnForm.map((data) => (
                    <Col key={nanoid()} md={3} sm={3} xs={3}>
                        <Button
                            variant={electivesStore.toastBtn == data.title ?"outline-primary":"outline-secondary"}
                            href={data.href}
                            style={{fontSize:'1.5rem'}}
                        >
                            { data.icon}
                        </Button>

                    </Col>
                ))}
            </Row>
        </div>
    )
})
