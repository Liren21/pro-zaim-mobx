import * as React from 'react'
import {observer} from 'mobx-react-lite'
import {dataInsideCard} from '../../../../../generic/Data/DataCard'
import {nanoid} from 'nanoid'
import {Accordion, Card} from 'react-bootstrap'
import './InfoCard.scss'

export default observer(() => {
    return (
        <div className={'info-card'}>
            <div key={nanoid()}>
                <Accordion style={{borderRadius:'20px'}} key={nanoid()}>
                    {dataInsideCard.map((data, k) => (
                        <div key={nanoid()}>
                            <Accordion.Item style={{borderRadius:'20px',margin:'0 0 10px 0'}} eventKey={`${k}`}>
                                <Accordion.Header > {data.header}</Accordion.Header>
                                <Accordion.Body>
                                    <MyComponent key={nanoid()} data={data.inside}/>
                                </Accordion.Body>
                            </Accordion.Item>

                        </div>
                    ))}
                </Accordion>

            </div>
        </div>
    )
})

const MyComponent = ({data}: any) => (
    <div style={{overflowY: 'scroll', height: '16rem', width: '100%'}}>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
        {data.map((data) => (
            <Card style={{transform: 'none', boxShadow: 'none'}} key={nanoid()}>
                <Card.Title>{data.title}</Card.Title>
                <Card.Body>
                    {data.body} <i className="fa fa-check-circle-o" aria-hidden="true"/>
                </Card.Body>
            </Card>
        ))}
    </div>
)
