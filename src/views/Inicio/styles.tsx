import styled from 'styled-components'
import { lighten } from 'polished'

export const Content = styled.div`
    display: flex;
    height: 600px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* background: green; */

    @media (min-height: 600px) {
        height: 100vh;
    }

    @media (min-width: 1280px) {
        display: grid;
        grid-template-columns: 1fr 5px 1fr;
    }
`

export const Title = styled.h1`
    color: ${(props) => props.theme.colorPrimary};
    text-transform: uppercase;
    text-align: center;
    font-size: 36px;

    @media (min-width: 600px) {
        width: 400px;
        font-size: 50px;
    }

    @media (min-width: 1280px) {
        width: 600px;
        font-size: 65px;
    }
`

export const SeparatorLine = styled.div`
    width: 100%;
    height: 5px;
    background-color: ${(props) => props.theme.borderColorSecondary};

    @media (min-width: 1280px) {
        width: 5px;
        height: 100%;
    }
`

export const WrapperChoiceButton = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: red; */
`

export const ChoiceButton = styled.button`
    width: 300px;
    padding: 15px;
    background-color: ${(props) => lighten(0.05, props.theme.bgDefault)};
    color: ${(props) => props.theme.colorPrimary};
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 30px;
    border-radius: 5px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);

    &:last-child {
        margin-bottom: 0;
    }

    div {
        width: max-content;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        margin: 0 auto;

        .icon {
            font-size: 50px;
        }

        .icon-heart {
            color: ${(props) => props.theme.bgPrimary};
            stroke: #fff;
            stroke-width: 20px;
        }
    }

    @media (min-width: 1280px) {
        width: 400px;
        min-height: 110px;
        font-size: 30px;
        margin: 0 auto;
        margin-bottom: 40px;

        div .icon {
            font-size: 60px;
        }
    }
`
