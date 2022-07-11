import { Layout } from "antd"
import React from "react"
import { Outlet } from "react-router-dom"
import Banner from "../pages/GlobalComponent/Banner"

const stylePage = {
    generalLayout: {
        minHeight: '100%'
    }
}

const DashboardRoutes = () => {
    return(
        <Layout style={stylePage.generalLayout} >
            <Layout >
                <Banner />
                <Outlet />
            </Layout>
        </Layout>
    )
}

export default DashboardRoutes