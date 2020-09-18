import React from 'react'
import styled from 'styled-components'
import Holders from '../Holders/Holders'

const Activities = () => {
    const Active = styled.div`
        display: flex;
        background: skyblue;
        flex-direction: column;
        height: 250px;
        margin-left: 20px;
        width: 200px;
    `

    return (
        <Active>
            <h4>Activities</h4>
            <Holders title="No of Pinned Deals" amount="3000" />
            <Holders title="No of Claimed Deals" amount="3500" />
        </Active>
    )
}
export default Activities