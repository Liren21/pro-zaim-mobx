import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { nanoid } from 'nanoid'
import electivesStore from '../../../../lib/store/pages/Electives-store'
import { data } from '../../../../generic/Data/DataCard'
import Info from '../../Modal/Info/Info'
import './ResultCard.scss'
import ModalLoader from '../../../../generic/ModalLoader/ModalLoader'

export default observer(() => {
    const [heart, setHeart] = useState(false)
    const redirect = (val) => {
        electivesStore.setLink(val)
    }
    useEffect(() => {
        electivesStore.setToastBtn('Калькулятор')
        electivesStore.setStateLoader(false)
    }, [])
    return (
        <>
            <ModalLoader />
            {data.map((data) => (
                <div className={'result-block'} key={nanoid()}>
                    {data.min - 1 >= electivesStore.minNumRange ? null : (
                        <Row style={{ display: 'inline-block' }} key={nanoid()}>
                            <Col key={nanoid()}>
                                <Card key={nanoid()} className={'home'}>
                                    <div key={nanoid()} className={'home-item'}>
                                        <Col key={nanoid()} xs={3} md={3}>
                                            <Card.Img
                                                key={nanoid()}
                                                className={'card-img'}
                                                variant="top"
                                                src={data.img}
                                            />
                                            <br />
                                            <br />
                                        </Col>
                                        <Col key={nanoid()} xs={7} md={7}>
                                            <div className={'title-card'}>
                                                {data.name}

                                                {heart ? (
                                                    <i
                                                        style={{
                                                            float: 'right',
                                                            marginLeft: '1rem',
                                                            borderColor: 'rgba(255,255,255,0)',
                                                            borderRadius: '150px',
                                                        }}
                                                        onClick={() => setHeart(false)}
                                                        className="fa fa-heart"
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <i
                                                        style={{
                                                            float: 'right',
                                                            marginLeft: '1rem',
                                                            borderColor: 'rgba(255,255,255,0)',
                                                            borderRadius: '150px',
                                                        }}
                                                        onClick={() => setHeart(true)}
                                                        className="fa fa-heart-o"
                                                        aria-hidden="true"
                                                        // Добавить добавление в массив имени
                                                    />
                                                )}
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
                                                variant={'dark'}
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
                    )}
                </div>
            ))}
        </>
    )
})
const MyDescr = observer(({ data }: any) => {
    return (
        <div style={{ display: 'inline-block' }}>
            <Row style={{ display: 'inline-block' }}>
                {data.map((data) => (
                    <Col key={nanoid()} style={{ display: 'inline-block' }} xs={4} sm={4} md={4}>
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
