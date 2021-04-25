import React from 'react'
import { useHistory } from 'react-router'
import { RoutePaths } from '../../routes'
import { limitTextSize } from '../../shared/helpers'
import {
    WrapperMessage,
    Body,
    Picture,
    Title,
    Text,
    MessageTime,
    MessageNotSeenIndicator,
} from './styles'
import { Props } from './types'

function Message({ name, lastMessage, pictureUrl, seen }: Props) {
    const history = useHistory()

    const openChat = () => history.push(RoutePaths.CHAT('1'))

    return (
        <>
            <WrapperMessage seen={seen} onClick={openChat}>
                <Picture src={pictureUrl} alt={`Foto do(a) ${name}`} />

                <Body>
                    <Title seen={seen}>{name}</Title>
                    <Text seen={seen}>{limitTextSize(lastMessage, 100)}</Text>
                    <MessageTime>
                        <span>23:58</span>
                        {!seen && <MessageNotSeenIndicator />}
                    </MessageTime>
                </Body>
            </WrapperMessage>
        </>
    )
}

export default Message
