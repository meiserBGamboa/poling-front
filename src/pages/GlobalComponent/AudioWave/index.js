import { Button, Col } from "antd"
import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from 'wavesurfer.js'

const AudioWave = ({file, sec}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const waveSurferRef = useRef()

    useEffect(() => {
        if(!waveSurferRef.current){
        waveSurferRef.current = WaveSurfer.create({
            barWidth:  2,
            cursorWidth: 1,
            container: `#waveform${sec}`,
            height: 60,
            progressColor: '#9CA1A4',
            responsive: true,
            waveColor: '#EFEFEF',
            cursorColor: 'transparent',
        })

        waveSurferRef.current.load(file)}
    }, [file, sec])

    const handlePlay = () => {
        setIsPlaying(!isPlaying)
        waveSurferRef.current.playPause()
    }

    const getFormatDuration = (current) => {
        let time = waveSurferRef.current.getDuration()
        
        if(!time) return '00:00'

        let hours = parseInt(time / 3600, 10)
        time = time % 3600
        let min = parseInt(time / 60, 10)
        time = time % 60
        let sec = parseInt(time, 10)

        if(hours > 0) return `${('0' + hours).slice(-2)}:${('0' + min).slice(-2)}:${('0' + sec).slice(-2)}`
        else return `${('0' + min).slice(-2)}:${('0' + sec).slice(-2)}`

    }

    return(
        <React.Fragment >
            <Col span={24} >
                <div id={`waveform${sec}`} style={{marginTop: 20, marginBottom: 20}} ></div>
            </Col>
            <Col span={2} >
                <Button shape="circle" size="middle" danger type="primary" onClick={handlePlay} >{isPlaying ? 'pause' : 'play'}</Button>
            </Col>
            <Col span={2} >
                <p >{getFormatDuration()}</p>
            </Col>
        </React.Fragment>
    )
}

export default AudioWave