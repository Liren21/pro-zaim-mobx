import React, { useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import './Home.scss'
import { data } from '../../generic/Data/DataCard'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Info from '../pages/Modal/Info/Info'
import { nanoid } from 'nanoid'
import { CSSTransition } from 'react-transition-group'
import electivesStore from '../../lib/store/pages/Electives-store'
import ToastCustom from '../../generic/ToastCustom/ToastCustom'
import ModalLoader from '../../generic/ModalLoader/ModalLoader'

export default observer(() => {
    const [showMessage, setShowMessage] = useState(false)
    const nodeRef = useRef(null)
    const redirect = (val) => {
        electivesStore.setLink(val)
    }
    useEffect(() => {
        electivesStore.setToastBtn('Займ')
        setShowMessage(true)
        electivesStore.setStateLoader(false)
    }, [])
    return (
        <CSSTransition in={showMessage} nodeRef={nodeRef} timeout={300} classNames="alert" unmountOnExit>
            <div ref={nodeRef} style={{ display: 'inline-block' }}>
                <ModalLoader />
                <ToastCustom />
                {data.map((data) => (
                    <Row key={nanoid()} style={{ display: 'inline-block' }}>
                        <Col key={nanoid()}>
                            <Card key={nanoid()} className={'home'}>
                                <div key={nanoid()} className={'home-item'}>
                                    <Col key={nanoid()} xs={3} md={3}>
                                        <Card.Img
                                            key={nanoid()}
                                            className={'card-img'}
                                            variant="top"
                                            src={data.title}
                                        />
                                        <br />
                                        <br />
                                    </Col>
                                    <Col key={nanoid()} xs={7} md={7}>
                                        {data.name}
                                    </Col>
                                </div>
                                <MyDescr key={nanoid()} data={data.descr}/>
                                <br />
                                <br />
                                <div key={nanoid()} className={'home-item'}>
                                    <Col key={nanoid()} xs={6} md={6}>
                                        <Info />
                                    </Col>
                                    <Col key={nanoid()} xs={6} md={6}>
                                        <Button
                                            href={data.link}
                                            style={{ background: '#5925DC', float: 'right' }}
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
                        </Col>
                    </Row>
                ))}
            </div>
        </CSSTransition>
    )
})
const MyDescr = observer(({ data }:any) => {
    console.log(data)
    return (
        <div>
            {data.map((data) => (
                <div key={nanoid()} className={'desc'}>
                    {data.body}
                    <br/><br/>
                </div>
            ))}
        </div>
    );
})