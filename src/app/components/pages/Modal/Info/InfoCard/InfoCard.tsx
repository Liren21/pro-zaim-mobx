import * as React from 'react'
import { observer } from 'mobx-react-lite'
import { dataInsideCard } from '../../../../../generic/Data/DataCard'
import { nanoid } from 'nanoid'
import { Accordion, Card } from 'react-bootstrap'
import './InfoCard.scss'

export default observer(() => {
    return (
        <div className={'info-card'}>
            <Accordion>
                {dataInsideCard.map((data) => (
                    <div key={nanoid()}>
                        <Accordion.Item eventKey={nanoid()}>
                            <Accordion.Header> {data.header}</Accordion.Header>
                            <Accordion.Body>
                                <MyComponent key={nanoid()} data={data.inside} />
                            </Accordion.Body>
                        </Accordion.Item>
                        <br />
                    </div>
                ))}
            </Accordion>
        </div>
    )
})

const MyComponent = ({ data }: any) => (
    <div style={{ overflowY: 'scroll', height: '16rem', width: '100%' }}>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
        {data.map((data) => (
            <Card style={{ transform: 'none', boxShadow: 'none' }} key={nanoid()}>
                {data.img ? <Card.Title>{data.img}</Card.Title> : null}
                <Card.Body>
                    {data.body} <i className="fa fa-check-circle-o" aria-hidden="true" />
                </Card.Body>
            </Card>
        ))}
    </div>
)
