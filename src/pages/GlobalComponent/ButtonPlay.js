import React from 'react'

const styleButton = {
    btnContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '25px',
        height: '25px',
        flexGrow: 1,
    },
    btnPlay: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '12px 0 12px 17px',
        borderColor: 'transparent transparent transparent #ffffff',
        cursor: 'pointer',
    },
    btnStop: {
        height: '20px',
        width: '15px',
        borderLeft: '5px solid rgb(255, 255, 255)',
        borderRight: '5px solid rgb(255, 255, 255)',
        cursor: 'pointer',
    }
}

const ButtonPlay = ({ play, isPlaying }) => {
    return (
        <div style={styleButton.btnContainer}>
            <div onClick={play} style={isPlaying ? styleButton.btnStop : styleButton.btnPlay}></div>
        </div>
    )
}

export default ButtonPlay