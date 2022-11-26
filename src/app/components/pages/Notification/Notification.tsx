import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import electivesStore from "../../../lib/store/pages/Electives-store";
import {notification} from "../../../generic/Data/DataCard";
import {Button, Card, Col, Row} from "react-bootstrap";
import {nanoid} from "nanoid";
import './Notification.scss'

import { XLg} from "react-bootstrap-icons";
import {AnimationEffect} from "../../../generic/AnimationEffect/AnimationEffect";


export default observer(() => {
    useEffect(() => {
        electivesStore.setToastBtn('Уведомление')
    }, [])

    return (
        <AnimationEffect>
            {
                notification.map((n) => (

                    <Row key={nanoid()}>
                        <hr/>
                        <Col
                            xs={1}
                            sm={1}
                            md={1}
                        >
                            {
                                n.lvl == 0 ? <div key={nanoid()} className={'circle-success'}/> :
                                    n.lvl == 1 ? <div key={nanoid()} className={'circle-warning'}/> :
                                        n.lvl == 2 ? <div key={nanoid()} className={'circle-danger'}/> : null
                            }


                            <br />
                            <br />
                        </Col>
                        <Col
                            xs={9}
                            sm={9}
                            md={9}
                        >

                            <Card key={nanoid()} className={'notification-card'}>
                                {n.text}
                            </Card>

                            <br />
                            <br />
                        </Col>
                        <Col
                            xs={2}
                            sm={2}
                            md={2}
                            style={{textAlign: 'center'}}
                        >
                            <Button  variant={"outline-secondary"}>
                                <XLg key={nanoid()}/>
                            </Button>
                            <br />
                            <br />
                        </Col>
                    </Row>
                ))
            }
        </AnimationEffect>
    )
})
