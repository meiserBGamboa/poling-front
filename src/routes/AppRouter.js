import React, { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { AuthContext } from '../auth/AuthContext'
import { PrivateRouter } from './PrivateRouter'
import DashboardRoutes from './DashboardRouter'
import * as route from '../utils/Routes'
import Login from "../pages/Login"
import DashboardWrapper from "../pages/DashboardWrapper"
import Category from "../pages/Category"
import Page404 from "../pages/Page404"

const AppRouter = () => {
    const { userQuizPoling } = useContext(AuthContext);

    return(
        <BrowserRouter >
            <Routes >
                <Route exact path={route.login} element={<Login/>} />
                <Route exact path='/' element={<PrivateRouter component={<DashboardRoutes />} isAuthenticated={userQuizPoling.logged} />} >
                    <Route exact path={route.dashboard} element={<DashboardWrapper />} />
                    <Route exact path={`${route.category}/:id`} element={<Category />} />
                    <Route path='*' element={<Page404 /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
  
export default AppRouter