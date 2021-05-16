import { lighten } from 'polished'
import styled from 'styled-components'

export const WrapperMessageList = styled.div`
    margin-top: 50px;

    .loading-message {
        background-color: ${(props) => lighten(0.09, props.theme.bgDefault)};
        height: 140px;
        margin-bottom: 40px;
        border-radius: 5px;

        @media (min-width: 980px) {
            width: 800px;
        }
    }
`

export const MessageList = styled.div`
    margin-top: 50px;
`

export const WrapperLatestMatchesList = styled.div`
    min-height: 100px;
`
