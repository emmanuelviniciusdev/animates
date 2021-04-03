import { darken } from 'polished'
import styled from 'styled-components'

export const ButtonOption = styled.button`
    width: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    transition: 0.1s all;

    &:last-child {
        margin-bottom: 100px;
    }

    &:hover {
        background-color: ${(props) => darken(0.03, props.theme.bgDefault)};
    }

    @media (min-width: 1280px) {
        &:last-child {
            margin-bottom: 0;
        }
    }
`

export const WrapperIcon = styled.div`
    width: 70px;
    height: 70px;
    background-color: ${(props) => darken(0.03, props.theme.bgDefault)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    transition: 0.1s all;

    .icon {
        font-size: 45px;
        color: ${(props) => props.theme.colorPrimary};
    }

    ${ButtonOption}:hover & {
        background-color: ${(props) => props.theme.bgDefault};
    }
`

export const Text = styled.span`
    color: ${(props) => props.theme.colorPrimary};
    font-size: 18px;
    text-decoration: none;

    ${ButtonOption}:hover & {
        text-decoration: underline;
    }
`
