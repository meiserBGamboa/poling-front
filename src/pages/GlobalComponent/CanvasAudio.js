import React from 'react'
import { Button, Col, Row, Typography } from "antd"
//import {HeartOutlined, MessageOutlined} from '@ant-design/icons'
import PanelAudio from './PanelAudio'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography

const CanvasAudio = ({
    name, 
    index
}) => {
    let navigate = useNavigate()
    const sendEvaluate = (id) => {
        navigate(`/evaluate/${id}`)
    }
    
    return (
        <div >
            <Row 
                gutter={16} 
                key={`clip-line-${index}`}
                style={{
                    marginBottom: '30px',
                    background: 'rgba(255,255,255,.15)',
                    padding: '20px',
                    borderRadius: 20
                }}
            >
                <Col xs={24} sm={24} >
                    <Title level={3} >{name}</Title>
                </Col>
                <Col xs={24} sm={20} >
                    <PanelAudio />
                </Col>
                <Col xs={24} sm={4} >
                    <Button type="primary" danger onClick={() => sendEvaluate(index)} >Evaluar</Button>
                </Col>
            </Row>
        </div>
    )
}

export default CanvasAudio