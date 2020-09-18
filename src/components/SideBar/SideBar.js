import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components'

const SideBar = () => {
    
    const Container = styled.div`
        margin: 70px 0 50px 100px;
        background: #f3f3f3;
        width: 20%;
        min-height: 80vh;
        position: relative;
    `;
    
    return (
        <Container>
            <Card title="DashBoard" />
            <Card title="Transactions" />
            <Card title="Deals" />
            <Card title="Merchants" />
            <Card title="User Management" />
        </Container>
    )
}
export default SideBar