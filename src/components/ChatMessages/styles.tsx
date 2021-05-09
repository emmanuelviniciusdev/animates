import { lighten } from 'polished'
import styled, { DefaultTheme } from 'styled-components'
import { MessageType } from './types'

function getMessageBackgroundColor(
    messageType: MessageType,
    theme: DefaultTheme
) {
    if (messageType === 'receiver') return lighten(0.06, theme.bgDefault)

    if (messageType === 'sender') return theme.bgPrimary
}

export const Content = styled.div`
    height: 100%;
    overflow-y: auto;
`

export const MessageGroup = styled.div`
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const MessageGroupDate = styled.div`
    text-align: center;
    margin-bottom: 20px;

    span {
        font-weight: bold;
        font-size: 14px;
    }
`

export const Message = styled.div<{ type: MessageType }>`
    background-color: ${(props) =>
        getMessageBackgroundColor(props.type, props.theme)};
    width: max-content;
    max-width: 200px;
    padding: 10px 25px;
    border-radius: 30px;
    margin-bottom: 15px;
    margin-left: ${(props) => (props.type === 'sender' ? 'auto' : 'initial')};

    &:last-child {
        margin-bottom: 0;
    }

    span {
        font-size: 18px;
    }

    @media (min-width: 600px) {
        max-width: 400px;
    }

    @media (min-width: 960px) {
        max-width: 600px;
    }
`
