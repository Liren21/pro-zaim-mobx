import React from 'react'
import {observer} from 'mobx-react-lite'
import {Alert} from "react-bootstrap";

interface IMesError {
    text: string
}


export default observer(({text}: IMesError) => {

    return (
        <Alert variant={'danger'}>
            {text}
        </Alert>

    )
})
