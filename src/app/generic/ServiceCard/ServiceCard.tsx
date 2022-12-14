import React from 'react'
import {observer} from 'mobx-react-lite'
import './ServiceCard.scss'

import {Button, Card, Col, Row} from 'react-bootstrap'
import {nanoid} from 'nanoid'
import electivesStore from '../../lib/store/pages/Electives-store'
import Info from "../../components/pages/Modal/Info/Info";


import HeartCustom from "../Heart/HeartCustom";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const faPropIconFaStar = faStar;

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
                        <HeartCustom data={data}/>

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
                        href={electivesStore.details != 'RU' ? null
                            :
                            data.link
                        }
                        variant={'primary'}
                        className={'home-btn'}
                        onClick={
                            electivesStore.details != 'RU' ?
                                null
                                :
                                () => {
                                    redirect(data.link)
                                    electivesStore.setStateLoader(true)
                                }
                        }
                    >
                        ??????????????
                    </Button>
                </Col>
            </div>
        </Card>
    )
})
const MyDescr = observer(({data}: any) => {
    return (
        <div>
            <Row>
                {data.map((data) => (
                    <Col key={nanoid()} style={{display: 'inline-block', textAlign: 'center'}} md={4} sm={4} xs={4}>
                        <div key={nanoid()} style={{fontSize: '12px'}} dangerouslySetInnerHTML={{__html: data.body}}/>
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

                            <FontAwesomeIcon icon={faPropIconFaStar} style={{color: '#ffca2c'}}/>
                             {data.star}


                </div>
            ))}
        </div>
    )
})
