import React from 'react'
import { limitTextSize } from '../../shared/helpers'
import {
    WrapperMessage,
    Body,
    Picture,
    Title,
    Text,
    MessageTime,
    WrapperMessageNotSeenIndicator,
    MessageNotSeenIndicator,
} from './styles'
import { Props } from './types'

function Message({ name, lastMessage, pictureUrl, seen }: Props) {
    return (
        <>
            <WrapperMessage>
                <Picture src={pictureUrl} alt={`Foto do(a) ${name}`} />

                <Body>
                    <div>
                        <Title seen={seen}>{name}</Title>
                        <Text seen={seen}>
                            {limitTextSize(lastMessage, 60)}
                        </Text>
                    </div>

                    <div>
                        <MessageTime>23:58</MessageTime>
                        {!seen && (
                            <WrapperMessageNotSeenIndicator>
                                <MessageNotSeenIndicator />
                            </WrapperMessageNotSeenIndicator>
                        )}
                    </div>
                </Body>
            </WrapperMessage>
        </>
    )
}

export default Message
