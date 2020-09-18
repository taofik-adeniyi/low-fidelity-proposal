import React from 'react'
import styled from 'styled-components'

const Transactions = () => {
    const Transact = styled.div`
        width: 330px;
        height: 180px;
        margin-left: 20px;
        margin-right: 35px;
        border: 1px solid #000;
    `

    return (
        <div style={{background: 'skyBlue'}}>
            <h4 style={{marginLeft: '20px'}}>
                Transactions
            </h4>
            <Transact />                
        </div>
    )
}
export default Transactions