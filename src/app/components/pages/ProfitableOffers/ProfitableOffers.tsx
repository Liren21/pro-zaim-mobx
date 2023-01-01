import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import './ProfitableOffers.scss'
import {Alert, Button, Card, Form} from 'react-bootstrap'
import electivesStore from "../../../lib/store/pages/Electives-store";
import {AnimationEffect} from "../../../generic/AnimationEffect/AnimationEffect";
import {nanoid} from "nanoid";


export default observer(() => {


    useEffect(() => {
        electivesStore.setToastBtn('Предложения')

    }, [])
    return (
        <AnimationEffect>
            <Alert style={{border: 'none', borderRadius: '12px', textAlign: 'center'}} key={nanoid()}
                   variant={'success'}>
               Здесь вы можете написать свои пожелания что можно добавить/изменить в приложении.
            </Alert>
            <br/>
            <Form>
              <Card>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Control aria-valuemin={100} type="email" placeholder="Ваш email"/>
                  </Form.Group>
              </Card>
               <Card>
                   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                       <Form.Control placeholder="Текст" as="textarea" rows={3}/>
                   </Form.Group>
               </Card>
                <br/>
                <Button style={{float:"right"}} variant={"primary"}>Отправить</Button>
            </Form>
        </AnimationEffect>
    )
})
