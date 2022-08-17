import { AuthContext } from "../../auth/AuthContext"
import imageLogin from '../../assets/images/login-01.webp'
import { Button, Col, Form, Input, Row } from "antd"
import React, { useContext } from "react"
import * as route from '../../utils/Routes'
import { types } from "../../utils/GeneralTypes"
import { useNavigate } from "react-router-dom"

const stylePage = {
    spaceContainer: {
        height: '100%',
        margin: 0,
    },
    image: {
        width: '70%'
    },
    colForm: {
        textAlign: 'center',
        padding: '20px',
        background: 'rgba(5,30,40,.7)'
    },
    divForm: {
        textAlign: 'center'
    },
    formItem: {
        justifyContent: 'center'
    }

}

const Login = () => {
    const { dispatch } = useContext(AuthContext)
    let navigate = useNavigate()
    const onFinish = () => {
        dispatch({
            type: types.login,
            payload: {
              userNames: 'Meiser B',
              lastNames: 'Gamboa Cuello',
              institution: 'UNI'
            }
        })
        navigate(route.dashboard)
    }

    return(
        <div style={stylePage.spaceContainer} >
            <Row 
                gutter={16} 
                justify="center" 
                align="middle" 
                style={stylePage.spaceContainer} 
            >
                <Col 
                    xs={22}
                    sm={22}
                    md={22}
                    lg={14}
                    xl={14}
                >
                    <img src={imageLogin} alt='singers' style={stylePage.image} />
                </Col>
                <Col 
                    xs={22}
                    sm={22}
                    md={22}
                    lg={8}
                    xl={8}
                    style={stylePage.colForm}
                >
                    <div style={stylePage.colForm}>
                        <Form 
                            labelCol={{ span: 1, }}
                            wrapperCol={{ span: 20, }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item 
                                name='name'
                                size='large'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please register your name'
                                    }
                                ]}
                                style={stylePage.formItem}
                            >
                                <Input 
                                    placeholder="Name" />
                            </Form.Item>
                            <Form.Item 
                                name='lastName'
                                size='large'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please register your last name'
                                    }
                                ]}
                                style={stylePage.formItem}
                            >
                                <Input 
                                    placeholder="Last name" />
                            </Form.Item>
                            <Form.Item 
                                name='academicInstitution'
                                size='large'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please register your academic institution'
                                    }
                                ]}
                                style={stylePage.formItem}
                            >
                                <Input 
                                    placeholder="Academic institution" />
                            </Form.Item>
                            <Form.Item 
                                style={stylePage.formItem}
                            >
                                <Button 
                                    type='primary'
                                    size='large'
                                    shape='round'
                                    htmlType='submit'
                                >
                                    Log In
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Login