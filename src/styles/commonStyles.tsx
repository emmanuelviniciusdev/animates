import { lighten } from 'polished'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
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

const placeholderLoadingAnimation = keyframes`
    from {
        left: -150%;
    }
    to   {
        left: 100%;
    }
`

export const PlaceholderLoadingItem = styled.div<{ bgLinearGradient?: string }>`
    position: relative;
    overflow: hidden;

    &:before {
        content: '';
        display: block;
        position: absolute;
        left: -100%;
        top: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(
            to right,
            transparent 0%,
            ${(props) =>
                    props.bgLinearGradient ??
                    lighten(0.3, props.theme.bgDefault)}
                50%,
            transparent 100%
        );
        animation: ${placeholderLoadingAnimation} 1s
            cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
`
