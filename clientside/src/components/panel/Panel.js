import React from 'react'
import './Panel.css'

const Panel = () => {
    return (
        <div className="panel-container">
            <div className="btn-group" role="group" id="panel-group">
                <button type="button" className="btn btn-secondary btn-lg">Left</button>
                <button type="button" className="btn btn-secondary btn-lg">Middle</button>
                <button type="button" className="btn btn-secondary btn-lg">Right</button>
            </div >
        </div>
    )
}

export default Panel