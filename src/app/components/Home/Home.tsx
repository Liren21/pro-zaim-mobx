import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import './Home.scss'
import {data} from '../../generic/Data/DataCard'
import {Alert,  Col, Row} from 'react-bootstrap'

import {nanoid} from 'nanoid'
import electivesStore from '../../lib/store/pages/Electives-store'
import ToastCustom from '../../generic/ToastCustom/ToastCustom'
import ModalLoader from '../../generic/ModalLoader/ModalLoader'
import ServiceCard from "../../generic/ServiceCard/ServiceCard";
import {AnimationEffect} from "../../generic/AnimationEffect/AnimationEffect";


export default observer(() => {


    useEffect(() => {
        electivesStore.setToastBtn('Займ')
        electivesStore.setStateLoader(false)
    }, [])

    // На этом уровне сделать чек лайка

    return (
       <AnimationEffect>
          <div style={{padding:'0 1rem'}}>
              <ModalLoader/>
              <ToastCustom/>
              <Row key={nanoid()}>
                  <Alert style={{border: 'none', borderRadius: '12px', textAlign: 'center'}} key={nanoid()}
                         variant={'success'}>
                      Рекомендуем займы на выгодных условия
                  </Alert>

                  {data.map((data) => (
                      <Col key={nanoid()} md={6} lg={4} xl={3} style={{paddingBottom: ".7rem"}}>
                          <ServiceCard data={data}/>
                      </Col>
                  ))}
              </Row>
          </div>
       </AnimationEffect>
    )
})
