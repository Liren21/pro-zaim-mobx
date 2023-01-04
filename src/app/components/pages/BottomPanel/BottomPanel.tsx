import React from 'react'
import {observer} from 'mobx-react-lite'
import './BottomPanel.scss'
import routes from '../../../lib/routes'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import {faCalculator} from "@fortawesome/free-solid-svg-icons/faCalculator";
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import {faComment} from "@fortawesome/free-solid-svg-icons/faComment";
import CustomBtn from "../../../generic/CustomBtn/CustomBtn";

const faPropIconFaHouse = faHouse;
const faPropIconOneFaCalculator = faCalculator;
const faPropIconOneFaHeart = faHeart;
const faPropIconFaComment = faComment;

export default observer(() => {
    const btnForm = [
        {
            title: 'Хранилище',
            icon: <FontAwesomeIcon icon={faPropIconFaHouse}/>,
            href: '#' + routes.HOME,
        },
        {
            title: 'Калькулятор',
            icon: <FontAwesomeIcon icon={faPropIconOneFaCalculator}/>,
            href: '#' + routes.LOAN_PORTFOLIO,
        },
        {
            title: 'Избранное',
            icon: <FontAwesomeIcon icon={faPropIconOneFaHeart}/>,
            href: '#' + routes.HEART,
        },

        {
            title: 'Контакты ',
            icon: <FontAwesomeIcon icon={faPropIconFaComment}/>,
            href: '#' + routes.PROFITABLE_OFFERS,
        },
    ]
    return (
        <div className={'bottom-panel'}>
            {btnForm.map((data) => (
                <CustomBtn href={data.href} dataTitle={data.title} text={data.icon}/>

            ))}
        </div>
    )
})
