import styled from 'styled-components'
import { Seen } from './types'

type StyleProps = { seen: Seen }

export const WrapperMessage = styled.div`
    /* background-color: green; */
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 60px;

    @media (min-width: 980px) {
        width: 700px;
    }
`

export const Picture = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;

    @media (min-width: 600px) {
        width: 100px;
        height: 100px;
    }
`

export const Body = styled.div`
    width: 100%;
    display: flex;
    border-bottom: solid ${(props) => props.theme.colorSecondary} 1px;
    /* background-color: gray; */

    @media (min-width: 600px) {
        justify-content: space-between;
        height: 100px;
    }
`

export const Title = styled.span<StyleProps>`
    font-size: 18px;
    font-weight: ${(props) => (!props.seen ? 'bold' : 400)};

    @media (min-width: 600px) {
        font-size: 24px;
    }
`

export const Text = styled.p<StyleProps>`
    font-size: 14px;
    font-weight: ${(props) => (!props.seen ? 'bold' : 400)};
    color: ${(props) => props.theme.colorSecondary};

    @media (min-width: 600px) {
        font-size: 18px;
        margin-top: 10px;
    }
`

export const MessageMetadata = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MessageTime = styled.span`
    color: ${(props) => props.theme.colorSecondary};

    @media (min-width: 600px) {
        font-size: 18px;
    }
`

export const MessageNotSeenIndicator = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.bgPrimary};
    margin-top: 20px;
`
