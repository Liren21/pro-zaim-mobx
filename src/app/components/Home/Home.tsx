import React from 'react'
import {observer} from 'mobx-react-lite'
import './Home.scss'
import {data} from "../../generic/Data/DataCard";
import {Button, Card, Col, Row} from "react-bootstrap";
import Info from "../pages/Modal/Info/Info";


export default observer(() => {
    return (
        <div style={{display: "inline-block"}}>
            {
                data.map((data) => (
                    <Row style={{display: 'inline-block'}}>
                        <Col>
                            <Card className={'home'}>
                                <div className={'home-item'}>
                                    <Col md={6}>
                                        <Card.Img style={{borderRadius: '15px'}} variant="top" src={data.title}/>
                                        <br/>
                                        <br/>
                                    </Col>
                                    <Col md={6}>
                                        <Card className={'desc'}>
                                            dasdsada
                                        </Card>
                                        <Card className={'desc'}>
                                            dasdsada
                                        </Card>
                                        <Card className={'desc'}>
                                            dasdsada
                                        </Card>
                                    </Col>
                                </div>
                                <br/>
                                <br/>
                                <div className={'home-item'}>
                                    <Col md={6}>
                                        <Info/>
                                    </Col>
                                    <Col md={6}>
                                        <Button style={{background: '#5925DC'}} className={'home-btn'}>Открыть</Button>
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

const MyGroup = observer(({data, k}: any) => (
    <></>
))

