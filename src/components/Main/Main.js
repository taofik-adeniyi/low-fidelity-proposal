import React, { Children } from 'react'
import styled from 'styled-components'

function Main({children}) {
    const Main = styled.div`
        width: 60%;
        background: #fcfcfc;
        min-height: 80vh;
        margin: 70px 0 50px 0;
    `;

    return (
        <Main>
            {children}
        </Main>
    )
}

export default Main
