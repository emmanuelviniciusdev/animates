import { lighten } from 'polished'
import styled from 'styled-components'
import { Seen } from './types'

type StyleProps = { seen: Seen }

export const WrapperMessage = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
    padding: 20px;
    border-radius: 5px;
    transition: 0.1s all;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => lighten(0.05, props.theme.bgDefault)};
    }

    @media (min-width: 980px) {
        width: 800px;
    }
`

export const Picture = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`

export const Body = styled.div`
    /* background-color: gray; */
    width: 100%;
    min-height: 100px;
    max-height: 170px;
    display: flex;
    border-bottom: solid ${(props) => props.theme.colorSecondary} 1px;
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

export const MessageTime = styled.span`
    color: ${(props) => props.theme.colorSecondary};
    font-size: 18px;
`

export const WrapperMessageNotSeenIndicator = styled.div`
    /* background-color: green; */
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MessageNotSeenIndicator = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.bgPrimary};
`
