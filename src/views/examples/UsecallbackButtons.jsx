import React from "react"

const UseCallbackButtons = props => {
    console.log('render....')
    return (
        <div>
            <but className="btn"
                onClick={() => props.inc(6)}>+6</but>
            <but className="btn"
                onClick={() => props.inc(12)}>+12</but>
            <but className="btn"
                onClick={() => props.inc(18)}>+18</but>

        </div>
    )
}

export default React.memo(UseCallbackButtons)