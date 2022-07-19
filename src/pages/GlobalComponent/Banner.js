import { Col, Row } from 'antd'
import imageNav from '../../assets/images/about.jpg'

const Banner = () => {
    return(
        <div style={{
            height: '320px', 
        }} >
            <div 
                style={{
                    backgroundImage: `url(${imageNav})`, 
                    top: 0,
                    left: 0,
                    minHeight: '400',
                    height: '100%',
                    width: '100%',
                    backgroundSize: '100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <Row 
                    gutter={16} 
                    justify='center' 
                    align='middle' 
                    style={{textAlign: 'center', height: '100%', margin: '0'}}
                >
                    <Col span={24} >
                        Banner for name
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Banner