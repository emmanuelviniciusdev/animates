import styled, { createGlobalStyle } from 'styled-components'

/*
 * This is to make menu not look awkward on mobile screens.
 */
export const InsertBodyPaddingBottom = createGlobalStyle`
    body {
        padding-bottom: 50px;

        @media (min-width: 1280px) {
            padding-bottom: 0;
        }
    }
`

export const WrapperContent = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    background: ${(props) => props.theme.bgSecondary};
    z-index: 10;
    margin-top: 100px;

    @media (min-width: 1280px) {
        width: 450px;
        position: absolute;
        margin: 0;
        top: 25px;
        right: 0;
        bottom: auto;
        background: transparent;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px 0;

    @media (min-width: 1280px) {
        justify-content: space-between;
    }
`

export const ButtonIcon = styled.button`
    height: 50px;
    background-color: transparent;
    color: ${(props) => props.theme.colorPrimary};
    font-size: 36px;

    &:last-child {
        margin-right: 0;
    }

    div {
        display: flex;
        align-items: center;

        .icon-arrow-down {
            display: none;
        }
    }

    @media (min-width: 1280px) {
        font-size: 40px;

        div {
            .icon-arrow-down {
                display: block;
            }

            .icon-arrow-up {
                display: none;
            }
        }
    }
`
