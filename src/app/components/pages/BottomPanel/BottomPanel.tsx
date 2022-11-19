import React from 'react'
import {observer} from 'mobx-react-lite'
import './BottomPanel.scss'
import {Button, Col, Row} from 'react-bootstrap'
import routes from '../../../lib/routes'
import {nanoid} from 'nanoid'
import electivesStore from '../../../lib/store/pages/Electives-store'
import {Calculator, Collection, ThreeDots} from 'react-bootstrap-icons';
import CustomOffcanvas from "../../../generic/CustomOffcanvas/CustomOffcanvas";


export default observer(() => {
    const btnForm = [
        {
            title: 'Займ',
            icon: <Collection className={'icons'}/>,
            href: '#' + routes.HOME,
        },
        {
            title: 'Калькулятор',
            icon: <Calculator className={'icons'}/>,
            href: '#' + routes.LOAN_PORTFOLIO,
        },
        {
            name: 'Еще',
            icon: <ThreeDots className={'icons'}/>,
            btn: true,
            open: true,
            close: false,

        },
    ]
    return (
        <div className={'bottom-panel'}>
            <Row style={{display: 'inline-block'}}>
                {btnForm.map((data) => (
                    <Col key={nanoid()} md={4} sm={4} xs={4} style={{display: 'inline-block'}}>
                        {
                            data.title ? <Button
                                    href={data.href}
                                    className={
                                        electivesStore.toastBtn == data.title ? 'btn-bottom-panel-active' : 'btn-bottom-panel'
                                    }
                                    variant="outline-dark"
                                >
                                    <div>
                                        <i className="bi bi-bar-chart-line"></i>
                                        {data.icon}
                                    </div>
                                    {data.title}
                                </Button>
                                :
                                <CustomOffcanvas icon={data.icon} btn={data.btn} title={data.name} open={data.open}
                                                 close={data.close}/>
                        }
                    </Col>
                ))}
            </Row>
        </div>
    )
})
