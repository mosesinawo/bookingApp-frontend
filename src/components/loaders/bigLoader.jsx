import React from 'react'
import { Oval } from "react-loader-spinner";

const BigLoader = ({ width }) => {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Oval
                height={80}
                width={width}
                color="tomato"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}

            />
        </div>
    )
}

export default BigLoader