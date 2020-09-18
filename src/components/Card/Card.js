import React from 'react'
import styled from 'styled-components'

const Card = ({title}) => {
    const Card = styled.div`
        background-color: #333;
        padding: 10px;
        width: 70%;
        height: 50px;
        font-weight: bold;
        margin: 20px auto 20px auto;
    `;

    // const Button = styled.Button`
    //     text-align: center;
    // `;

    return (
        <Card>
            {title}
            {/* <Button></Button> */}
        </Card>
    )
}
export default Card