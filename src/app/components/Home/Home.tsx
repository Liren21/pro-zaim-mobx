import React from 'react'
import {observer} from 'mobx-react-lite'
import './Home.scss'
import {data} from "../../generic/Data/DataCard";
import {Button, Card, Col, Row} from "react-bootstrap";
import Info from "../pages/Modal/Info/Info";
import {nanoid} from "nanoid";


export default observer(() => {
    return (
        <div style={{display: "inline-block"}}>
            {
                data.map((data) => (
                    <Row key={nanoid()}  style={{display: 'inline-block'}}>
                        <Col key={nanoid()}>
                            <Card key={nanoid()} className={'home'}>
                                <div key={nanoid()} className={'home-item'}>
                                    <Col key={nanoid()} md={5}>
                                        <Card.Img key={nanoid()} style={{borderRadius: '15px'}} variant="top" src={data.title}/>
                                        <br/>
                                        <br/>
                                    </Col>
                                    <Col key={nanoid()} md={7}>
                                        <Card key={nanoid()} className={'desc'}>
                                            {data.loan}
                                        </Card>
                                        <Card key={nanoid()} className={'desc'}>
                                            {data.sum}
                                        </Card>
                                        <Card key={nanoid()} className={'desc'}>
                                            {data.bet}
                                        </Card>
                                    </Col>
                                </div>
                                <br/>
                                <br/>
                                <div key={nanoid()} className={'home-item'}>
                                    <Col key={nanoid()} md={6}>
                                        <Info/>
                                    </Col>
                                    <Col key={nanoid()} md={6}>
                                        <Button href={data.link} style={{background: '#5925DC',float:'right'}} className={'home-btn'}>Открыть</Button>
                                    </Col>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                ))
            }
        </div>
    )
})

