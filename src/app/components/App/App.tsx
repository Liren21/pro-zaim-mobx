import '../../../core/components/imports'
import './App.scss'
import * as React from 'react'
import HeaderApp from '../../../core/components/HeaderApp/HeaderApp'
import Router from '../Router/Router'
import {registerLocale} from 'react-datepicker'
import {ToastContainer} from 'react-toastify'
import ru from 'date-fns/locale/ru'
import {LoaderOverlay} from '../../../core/components/LoaderOverlay/LoaderOverlay'
import {Container} from 'react-bootstrap'
import {observer} from 'mobx-react-lite' // the locale you want
import appStore from '../../../core/lib/store/app'
import BottomPanel from '../pages/BottomPanel/BottomPanel'
import {useEffect} from "react";
import electivesStore from "../../lib/store/pages/Electives-store";


export const App = observer((): JSX.Element => {

    const getUserGeolocationDetails = () => {
        fetch(
            "https://ipgeolocation.abstractapi.com/v1/?api_key=af772993d8ce4dada5690c0645f83e7e"
        )
            .then(response => response.json())
            .then(data => {
                electivesStore.setDetails(data.country_code)
                electivesStore.setUserLang( navigator.language)
            });
    };

    useEffect(() => {
        getUserGeolocationDetails()
    }, [])

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    registerLocale('ru', ru)

    const optionsToaster = {
        autoClose: 8000,
        toastClassName: 'toast-style',
    }

    return (
        <div className={'app'}>
            <HeaderApp/>
            <Container>
                <LoaderOverlay loading={appStore.loading}/>
                <Router/>
            </Container>
            <BottomPanel/>
            <ToastContainer {...optionsToaster} />
        </div>
    )
})
