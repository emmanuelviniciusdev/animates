import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`

export const Img = styled.img`
    width: 95%;
    max-width: 360px;
`

export const Content = styled.div`
    text-align: center;

    p,
    h1 {
        margin: 30px 0;
    }

    button {
        margin: 15px 0 50px;
    }

    p {
        font-weight: bold;
        font-size: 64px;
    }

    h1 {
        font-weight: 400;
        font-size: 36px;
    }
`
