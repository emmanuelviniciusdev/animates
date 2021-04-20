import React from 'react'
import {
    WrapperMessage,
    Body,
    Picture,
    Title,
    Text,
    MessageTime,
    MessageNotSeenIndicator,
    MessageMetadata,
} from './styles'
import { Props } from './types'

// TODO: Abstract this into a helper function.
function limitLastMessageSize(message: string) {
    if (message.length <= 60) return message

    return message.substr(0, 57) + '...'
}

function Message({ name, lastMessage, pictureUrl, seen }: Props) {
    return (
        <>
            <WrapperMessage>
                <Picture src={pictureUrl} alt={`Foto do(a) ${name}`} />

                <Body>
                    <div>
                        <Title seen={seen}>{name}</Title>
                        <Text seen={seen}>
                            {limitLastMessageSize(lastMessage)}
                        </Text>
                    </div>

                    <MessageMetadata>
                        <MessageTime>23:58</MessageTime>
                        {!seen && <MessageNotSeenIndicator />}
                    </MessageMetadata>
                </Body>
            </WrapperMessage>
        </>
    )
}

export default Message
