import React from 'react'
import {observer} from 'mobx-react-lite'
import {Card} from "react-bootstrap";


export default observer(() => {
    return (
        <Card className={'loan-portfolio'}>
            <Card.Title>Название карточки</Card.Title>
            <Card.Body>

            </Card.Body>
        </Card>
    )
})

