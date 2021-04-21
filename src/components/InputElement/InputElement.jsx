import React from 'react'
import './Style.css'


function InputElement(props, ref) {
    return (
        <div>
            <input
                type="text"
                name={props.name}
                className={props.className}
                ref={ref}
            />
        </div>
    )
}

export default React.forwardRef(InputElement)
