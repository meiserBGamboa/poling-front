import { Col, Row } from "antd"
import React, { useEffect, useState } from "react"
import CanvasAudio from "../GlobalComponent/CanvasAudio"
import GeneralSpin from "../GlobalComponent/GeneralSpin"
import Banner from '../GlobalComponent/Banner'
import { useParams } from "react-router-dom"

const stylePage = {
    spaceContainer: {
        height: '100%',
        paddingTop: '30px',
        paddingBottom: '30px',
        margin: '0'
    },

}

const clips = [
    {
        name: 'clip 1 - pruebas de clip',
        category: 1,
        totalComments: 25,
    },
    {
        name: 'clip 4 - pruebas de clip',
        category: 1,
        totalComments: 25,
    },
    {
        name: 'clip 5 - pruebas de clip',
        category: 1,
        totalComments: 25,
    },
    {
        name: 'clip 6 - pruebas de clip',
        category: 2,
        totalComments: 25,
    },
    {
        name: 'clip 7 - pruebas de clip',
        category: 3,
        totalComments: 25,
    },
]

const Category = () => {
	const {id} = useParams()
    const [dataClips, setDataClips] = useState([])
	const [loading, setLoading] = useState(false)
    useEffect(() => {
        let dataFilter = clips.filter((item) => item.category === Number(id))
        console.log('data ', dataFilter, 'id ', id);
        setDataClips(dataFilter)
        setLoading(true)
    }, [setDataClips, id])

    return(
        <div >
            <Banner />
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
                    lg={18}
                    xl={14}
                    xxl={12}
                >
                    {(loading) ? 
                        dataClips.map((clip, index) => {
                            return (
                                <CanvasAudio 
                                    key={`audio-${index}`}
                                    name={clip.name}
                                    index={index}
                                />
                            )
                        })
                    :
                        <GeneralSpin />
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Category;