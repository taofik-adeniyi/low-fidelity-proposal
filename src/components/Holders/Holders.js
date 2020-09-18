import React from 'react'
import styled from 'styled-components'

const Holders = ({title, amount}) => {
    const Holder = styled.div`
        background: lightblue;
        padding: 10px;
        margin: 0 20px 10px 0;
        max-height: 60px;
    `

    return (
        <Holder>
            {title}<br/>{amount}
        </Holder>
    )
}
export default Holders