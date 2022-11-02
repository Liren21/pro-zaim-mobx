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
                    <Row style={{ display: 'inline-block' }} key={nanoid()}>
                        <Col key={nanoid()}>
                            <Card key={nanoid()} className={'home'}>
                                <div key={nanoid()} className={'home-item'}>
                                    <Col key={nanoid()} xs={3} md={3}>
                                        <Card.Img key={nanoid()} className={'card-img'} variant="top" src={data.img} />
                                        <br />
                                        <br />
                                    </Col>
                                    <Col key={nanoid()} xs={7} md={7}>
                                        <div className={'title-card'}>
                                            {data.name}
                                            <Button
                                                style={{
                                                    float: 'right',
                                                    marginLeft: '1rem',
                                                    borderColor: 'rgba(255,255,255,0)',
                                                }}
                                                variant="outline-danger"
                                            >
                                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                                            </Button>
                                        </div>
                                        <MyStat key={nanoid()} data={data.rate} />
                                    </Col>
                                </div>
                                <MyDescr key={nanoid()} data={data.descr} />
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
const MyDescr = observer(({ data }: any) => {
    return (
        <div style={{ display: 'inline-block' }}>
            <Row style={{ display: 'inline-block' }}>
                {data.map((data) => (
                    <Col key={nanoid()} style={{ display: 'inline-block' }} md={4}>
                        {data.body}
                    </Col>
                ))}
            </Row>
        </div>
    )
})
const MyStat = observer(({ data }: any) => {
    return (
        <div style={{ margin: '0 0 0 10px' }}>
            {data.map((data) => (
                <div style={{ fontSize: '12px' }} key={nanoid()}>
                    {data.star}
                    <i className="fa fa-star" aria-hidden="true" /> {data.feedback} Отвыз
                </div>
            ))}
        </div>
    )
})
