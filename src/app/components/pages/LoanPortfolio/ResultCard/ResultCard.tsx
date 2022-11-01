import React from 'react'
import {Card, Row, Col, Button} from 'react-bootstrap'

import {observer} from 'mobx-react-lite'

import {nanoid} from "nanoid";
import {data} from "../../../../generic/Data/DataCard";
import Info from "../../Modal/Info/Info";
import electivesStore from "../../../../lib/store/pages/ElectivesStore-store";
import electivesStoreStore from "../../../../lib/store/pages/ElectivesStore-store";


export default observer(() => {

    const redirect = (val) => {
        electivesStore.setLink(val)
    }


    return (

        <>
            {data.map((data) => (
                <Row key={nanoid()} style={{display: 'inline-block'}}>
                    <Col key={nanoid()}>
                        {data.min-1 < electivesStoreStore.minNumRange ?
                            <Card key={nanoid()} className={'home'}>
                            <div key={nanoid()} className={'home-item'}>
                                <Col key={nanoid()} xs={5} md={5}>
                                    <Card.Img
                                        key={nanoid()}
                                        style={{borderRadius: '15px'}}
                                        variant="top"
                                        src={data.title}
                                    />
                                    <br/>
                                    <br/>
                                </Col>
                                <Col key={nanoid()} xs={7} md={7}>
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
                                <Col key={nanoid()} xs={6} md={6}>
                                    <Info/>
                                </Col>
                                <Col key={nanoid()} xs={6} md={6}>
                                    <Button
                                        href={data.link}
                                        style={{background: '#5925DC', float: 'right'}}
                                        className={'home-btn'}
                                        onClick={() => {
                                            redirect(data.link)
                                            electivesStore.setStateLoader(true)
                                        }}
                                    >
                                        Открыть
                                    </Button>
                                </Col>
                            </div>
                        </Card>
                            :
                            null}
                    </Col>
                </Row>
            ))}
        </>

    )
})
