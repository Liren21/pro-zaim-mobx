import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import React from 'react'

import { observer } from 'mobx-react-lite'
import routes from '../../lib/routes'
import Home from '../Home/Home'
import LoanPortfolio from "../pages/LoanPortfolio/LoanPortfolio";
import PersonData from "../pages/PersonData/PersonData";
const Router = observer(() => {
    return (
        <HashRouter basename={routes.HOME}>
            <Switch>
                <Route exact path={routes.HOME} component={Home} />
                <Route exact path={routes.LOAN_PORTFOLIO} component={LoanPortfolio} />
                <Route exact path={routes.PERSON_DATA} component={PersonData} />
                <Redirect from="*" to={routes.HOME} />
            </Switch>
        </HashRouter>
    )
})

export default Router
