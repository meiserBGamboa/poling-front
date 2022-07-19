import { Layout } from "antd"
import React from "react"
import { Outlet } from "react-router-dom"

const stylePage = {
    generalLayout: {
        minHeight: '100%'
    }
}

const DashboardRoutes = () => {
    return(
        <Layout style={stylePage.generalLayout} >
            <Layout >
                <Outlet />
            </Layout>
        </Layout>
    )
}

export default DashboardRoutes