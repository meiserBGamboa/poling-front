import { Button, Col, Row, Typography } from "antd"
import React, { useEffect, useState } from "react"
import GeneralSpin from "../GlobalComponent/GeneralSpin"
import Banner from '../GlobalComponent/Banner'
import { useNavigate } from "react-router-dom"
import backCategory from '../../assets/images/categories.webp'

const { Title, Text } = Typography

const stylePage = {
    spaceContainer: {
        paddingTop: '30px',
        paddingBottom: '30px',
        margin: '0'
    },

}

const categories = [
    {
        index: 1,
        name: 'Naturalness',
        description: 'Evaluate naturalness of synthetic audios (from very artificial to very human)'
    },
    {
        index: 2,
        name: 'Speaker similarity',
        description: 'Evaluate naturalness of synthetic audios (from very artificial to very human)',
    },
    {
        index: 3,
        name: 'Real or synthetic',
        description: 'Guess if you re listening a real or synthetic sample',
    },
    {
        index: 4,
        name: 'Survey',
        description: 'After completing steps 1 and 2, please answer this small survey',
    },
]

const DashboardWrapper = () => {
    const [dataCategory, setDataCategory] = useState([])
	const [loading, setLoading] = useState(false)
    let navigate = useNavigate()

    useEffect(() => {
        setDataCategory(categories)
        setLoading(true)
    }, [setDataCategory])

    const sendCategory = (id) => {
        navigate(`/category/${id}`)
    }

    return(
        <div >
            <Banner imageBack={backCategory} />
            <Row 
                gutter={16} 
                justify="center" 
                align="middle" 
                style={stylePage.spaceContainer} 
            >
                <Col 
                    xs={24}
                    sm={22}
                    md={22}
                    lg={20}
                    xl={18}
                    xxl={16}
                >
                    <Row gutter={24} >
                        {(loading) ? 
                            dataCategory.map((category) => {
                                return (
                                    <Col span={12} style={{
                                        marginBottom: '40px',
                                        padding: '15px 30px', 
                                        background: 'rgba(255,255,255,.15)'
                                    }}>
                                        <Row style={{border: '0.5px solid', padding: '20px 30px'}}>
                                            <Col span={24} >
                                                <Title level={2} >{`${category.index}. ${category.name}`}</Title>
                                            </Col>
                                            <Col span={24} style={{marginBottom: '15px'}}>
                                                <Text >{`${category.description}`}</Text>
                                            </Col>
                                            <Col span={24} style={{alignItems: 'center', justifyContent: 'center'}} >
                                                <Button type="primary" danger onClick={() => sendCategory(category.index)} >Evaluate</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                            })
                        :
                            <GeneralSpin />
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default DashboardWrapper;