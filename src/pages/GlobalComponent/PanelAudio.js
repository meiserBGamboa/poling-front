import { Row } from "antd"
import song from '../../assets/sound/Suncrown - Legend of the Forgotten Centuries.mp3'
import AudioWave from "./AudioWave"

const PanelAudio = ({name}) => {

    return (
        <Row gutter={10} align='middle' >
            <AudioWave file={song} sec={name} />
        </Row>
    )
}

export default PanelAudio