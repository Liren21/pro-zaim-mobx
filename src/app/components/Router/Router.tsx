import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import React from 'react'

import { observer } from 'mobx-react-lite'
import routes from '../../lib/routes'
import Home from '../Home/Home'
import LoanPortfolio from '../pages/LoanPortfolio/LoanPortfolio'
import profitableOffers from '../pages/ProfitableOffers/ProfitableOffers'
import UpdateComp from '../pages/UpdateComp/UpdateComp'
import TechnicalWork from "../pages/TechnicalWork/TechnicalWork";
import Rapport from "../pages/Rapport/Rapport";
import Notification from "../pages/Notification/Notification";
import HeartVal from "../pages/HeartVal/HeartVal";

const Router = observer(() => {
    return (
        <HashRouter basename={routes.HOME}>
            <Switch>
                <Route exact path={routes.HOME} component={Home} />
                <Route exact path={routes.LOAN_PORTFOLIO} component={LoanPortfolio} />
                <Route exact path={routes.PROFITABLE_OFFERS} component={profitableOffers} />
                <Route exact path={routes.UPD_COMP} component={UpdateComp} />
                <Route exact path={routes.TECHNICAL_WORK} component={TechnicalWork} />
                <Route exact path={routes.RAPPORT} component={Rapport} />
                <Route exact path={routes.NOTIFICATION} component={Notification} />
                <Route exact path={routes.HEART} component={HeartVal} />
                <Redirect from="*" to={routes.HOME} />
            </Switch>
        </HashRouter>
    )
})

export default Router
