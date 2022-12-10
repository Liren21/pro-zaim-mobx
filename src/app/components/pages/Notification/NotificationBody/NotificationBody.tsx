import React, {useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'
import {Button, Card, Col, Row} from "react-bootstrap";
import {nanoid} from "nanoid";
import './NotificationBody.scss'
import {XLg} from "react-bootstrap-icons";
import {useLocalStorage} from "usehooks-ts";
import electivesStore from "../../../../lib/store/pages/Electives-store";

interface INotificationBody {
    data?: any
    lvl: number
    text: string
    id: number

}


export default observer(({lvl, text, id}: INotificationBody) => {

    const [state, setState] = useState([])
    const [delNotification, setDelNotification] = useLocalStorage('delNotification', [])


    const pushVal = () => {
        electivesStore.bob.push(id)
    }
    electivesStore.bob.filter((data) => {
        if (data == id) {
            // setDelNotification(data)
        }
    })
    console.log(electivesStore.bob)


    return (


        <Row key={nanoid()}>
            <Col
                xs={1}
                sm={1}
                md={1}
            >
                {
                    lvl == 0 ? <div key={nanoid()} className={'circle-success'}/> :
                        lvl == 1 ? <div key={nanoid()} className={'circle-warning'}/> :
                            lvl == 2 ? <div key={nanoid()} className={'circle-danger'}/> : null
                }


                <br/>
                <br/>
            </Col>
            <Col
                xs={9}
                sm={9}
                md={9}
            >

                <Card key={nanoid()} className={'notification-card'}>
                    {text}
                </Card>

                <br/>
                <br/>
            </Col>
            <Col
                xs={2}
                sm={2}
                md={2}
                style={{textAlign: 'center'}}
            >
                <Button onClick={pushVal} variant={"outline-secondary"}>
                    <XLg key={nanoid()}/>
                </Button>
                <br/>
                <br/>
            </Col>
        </Row>


    )
})
