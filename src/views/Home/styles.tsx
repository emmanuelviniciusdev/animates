import styled, { createGlobalStyle } from 'styled-components'
import dog1 from '../../assets/images/dog-1.png'

export const LocalGlobalStyle = createGlobalStyle`
    body {
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${dog1}) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    gap: 20px;

    @media (min-height: 500px) {
        gap: 60px;
    }

    @media (min-height: 640px) {
        gap: 100px;
    }

    @media (min-height: 850px) {
        gap: 140px;
    }
`

export const Header = styled.header`
    width: 100%;
    display: flex;

    a {
        margin-left: auto;
        margin-right: 20px;
    }

    button {
        width: 150px;
    }

    @media (min-width: 1320px) {
        a {
            margin-right: 0;
        }
    }
`

export const Title = styled.h1`
    text-align: center;
    font-size: 42px;
    max-width: 800px;

    @media (min-width: 600px) {
        width: 80%;
        font-size: 60px;
    }

    @media (min-width: 960px) {
        width: auto;
        font-size: 70px;
    }

    @media (min-width: 1280px) {
        max-width: 1200px;
        font-size: 80px;
    }
`
