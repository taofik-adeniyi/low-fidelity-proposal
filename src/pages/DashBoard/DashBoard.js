import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Main from '../../components/Main/Main'
import styled from 'styled-components'
import Holders from '../../components/Holders/Holders'
import Activities from '../../components/Activities/Activities'
import Transactions from '../../components/Transactions/Transactions'
import TableHolder from '../../components/TableHolder/TableHolder'

function DashBoard() {
    const Wrapper = styled.div`
        display: flex;
    `;

    const Holding = styled.div`
        display: flex;
        margin-left: 20px;
        margin-top: 20px;
    `

    const AandTholder = styled.div`
        display: flex;
    `
    const TableWrapper = styled.div`
        margin-left: 20px;    
    `

    return (
        <Wrapper>
            <SideBar />
            <Main>
                <Holding>
                    <Holders title="No of Spotters" amount="2,500" />
                    <Holders title="No of Merchants" amount="500" />
                    <Holders title="No of Malls" amount="25" />
                    <Holders title="No of Created Deals" amount="5,000" />
                </Holding>
                <AandTholder>
                    <Activities />
                    <Transactions />
                </AandTholder>
                <TableWrapper>
                    <TableHolder />
                </TableWrapper>
            </Main>
        </Wrapper>
    )
}

export default DashBoard
