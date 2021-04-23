import styled, { createGlobalStyle } from 'styled-components'
import dogAndCat1 from '../assets/images/dog-and-cat-1.png'

export const ApplyDogAndCat1Background = createGlobalStyle`
    body {
        background: url(${dogAndCat1}) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
`

export const GeneralContent = styled.div`
    /* background: green; */
    padding: 0 30px;

    @media (min-width: 960px) {
        padding: 0 60px;
    }

    @media (min-width: 1280px) {
        margin-top: 140px;
    }

    @media (min-width: 1440px) {
        padding: 0;
    }

    .wrapper-page-title {
        margin-bottom: 40px;
    }
`
