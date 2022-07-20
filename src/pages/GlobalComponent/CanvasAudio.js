import React from 'react'
import { Col, Row, Typography } from "antd"
import {HeartOutlined, MessageOutlined} from '@ant-design/icons'
import PanelAudio from './PanelAudio'

const { Title } = Typography

const CanvasAudio = ({
    name, 
    index
}) => {
    return (
        <div >
            <div >
                <Row 
                    gutter={16} 
                    key={`clip-line-${index}`}
                    style={{
                        marginBottom: '30px',
                        background: 'rgba(255,255,255,.15)',
                        padding: '20px'
                    }}
                >
                    <Col span={24} >
                        <Title level={3} >{name}</Title>
                    </Col>
                    <Col span={6} >
                        <HeartOutlined style={{
                            fontSize: '24px',
                        }} />
                    </Col>
                    <Col span={8} >
                        <MessageOutlined style={{
                            fontSize: '24px',
                        }} /> Comments
                    </Col>
                    <Col span={24} >
                        <Row gutter={10} >
                            <PanelAudio />
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CanvasAudio