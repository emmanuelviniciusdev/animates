import { lighten } from 'polished'
import styled from 'styled-components'
import { Seen } from './types'

type StyleProps = { seen: Seen }

export const WrapperMessage = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
    padding: 20px;
    transition: 0.1s all;
    cursor: pointer;
    border-radius: 5px;
    background-color: ${(props) => lighten(0.05, props.theme.bgDefault)};

    &:hover {
        background-color: ${(props) => lighten(0.1, props.theme.bgDefault)};
    }

    @media (min-width: 980px) {
        width: 800px;
    }
`

export const Picture = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`

export const Body = styled.div`
    /* background-color: gray; */
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Title = styled.span<StyleProps>`
    font-size: 24px;
    font-weight: ${(props) => (!props.seen ? 'bold' : 400)};
`

export const Text = styled.p<StyleProps>`
    font-size: 18px;
    font-weight: ${(props) => (!props.seen ? 'bold' : 400)};
    color: ${(props) => props.theme.colorSecondary};
`

export const MessageTime = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        color: ${(props) => props.theme.colorSecondary};
        font-size: 16px;
    }
`

export const MessageNotSeenIndicator = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.bgPrimary};
`
