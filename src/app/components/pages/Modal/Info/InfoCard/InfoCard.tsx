import * as React from 'react'
import { observer } from 'mobx-react-lite'
import { dataInsideCard } from '../../../../../generic/Data/DataCard'
import { nanoid } from 'nanoid'
import { Accordion, Card } from 'react-bootstrap'
import './InfoCard.scss'

export default observer(() => {
    return (
        <div className={'info-card'}>
            {dataInsideCard.map((data) => (
                <div key={nanoid()}>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> {data.header}</Accordion.Header>
                            <Accordion.Body>
                                <MyComponent key={nanoid()} data={data.inside} />
                            </Accordion.Body>
                        </Accordion.Item>
                        <br />
                    </Accordion>
                </div>
            ))}
        </div>
    )
})

const MyComponent = ({ data }: any) => (
    <>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
        {data.map((data) => (
            <Card style={{ transform: 'none' }} key={nanoid()}>
                <Card.Title>{data.title}</Card.Title>
                <Card.Body>
                    {data.body} <i className="fa fa-check-circle-o" aria-hidden="true" />
                </Card.Body>
            </Card>
        ))}
    </>
)
