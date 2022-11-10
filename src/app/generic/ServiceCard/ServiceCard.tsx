import React from 'react'
import {observer} from 'mobx-react-lite'
import './ServiceCard.scss'

import {Button, Card, Col, Row} from 'react-bootstrap'
import {nanoid} from 'nanoid'
import electivesStore from '../../lib/store/pages/Electives-store'
import Info from "../../components/pages/Modal/Info/Info";

interface IServiceCard {
    data: any
}

export default observer(({data}: IServiceCard) => {

    const redirect = (val) => {
        electivesStore.setLink(val)
    }
    return (
        <Card key={nanoid()} className={'home'}>
            <div key={nanoid()} className={'home-item'}>
                <Col key={nanoid()} xs={3} md={3}>
                    <Card.Img key={nanoid()} className={'card-img'} variant="top" src={data.img}/>
                    <br/>
                    <br/>
                </Col>

                <Col key={nanoid()} xs={7} md={7}>
                    <div className={'title-card'}>
                        {data.name}

                        {/* {arr.map((kok) => (*/}
                        {/*    <>*/}
                        {/*        {kok.id == data.name ? (*/}
                        {/*            <i*/}
                        {/*                style={{*/}
                        {/*                    float: 'right',*/}
                        {/*                    marginLeft: '1rem',*/}
                        {/*                    borderColor: 'rgba(255,255,255,0)',*/}
                        {/*                    borderRadius: '150px',*/}
                        {/*                }}*/}
                        {/*                className="fa fa-heart"*/}
                        {/*                aria-hidden="true"*/}
                        {/*            />*/}
                        {/*        ) : null}*/}
                        {/*    </>*/}
                        {/* ))}*/}
                    </div>
                    <MyStat key={nanoid()} data={data.rate}/>
                </Col>
            </div>
            <MyDescr key={nanoid()} data={data.descr}/>
            <br/>
            <br/>
            <div key={nanoid()} className={'home-item'}>
                <Col key={nanoid()} xs={6} md={6}>
                    <Info/>
                </Col>
                <Col key={nanoid()} xs={6} md={6}>
                    <Button
                        href={data.link}
                        variant={'primary'}
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
    )
})
const MyDescr = observer(({data}: any) => {
    return (
        <div >
            <Row>
                {data.map((data) => (
                    <Col key={nanoid()} style={{display: 'inline-block'}}  md={4} sm={4} xs={4}>
                        <div style={{fontSize:'12px'}} dangerouslySetInnerHTML={{__html: data.body}}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
})
const MyStat = observer(({data}: any) => {
    return (
        <div style={{margin: '0 0 0 10px'}}>
            {data.map((data) => (
                <div style={{fontSize: '12px'}} key={nanoid()}>
                    {data.star}
                    <i className="fa fa-star" aria-hidden="true"/> {data.feedback} Отзыв
                </div>
            ))}
        </div>
    )
})
