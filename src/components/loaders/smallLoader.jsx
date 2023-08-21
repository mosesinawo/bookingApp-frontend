import React from 'react'
import { RotatingLines } from "react-loader-spinner";

const SmallLoader = ({ width }) => {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center'
        }}>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width={width}
                visible={true}
            />
        </div>
    )
}

export default SmallLoader