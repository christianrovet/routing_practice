import React from 'react';


const Combo = (props) => {
    return (
        <div>
            <p style={{ backgroundColor: props.color2, color: props.color1 }}>The Word is: {props.word}</p>
        </div>
    )
}

export default Combo;