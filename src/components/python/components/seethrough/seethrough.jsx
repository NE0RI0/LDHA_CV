import React from 'react'
import './styles/seethrough.css'

export const PicturedText = ({text, picture}) => {
    const currentText = text
    return(
        <div class="wrapper">
            <div class="clip-text clip-text_one">{currentText}</div>
        </div>
    )


};