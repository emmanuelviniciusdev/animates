import React, { useEffect, useRef } from 'react'
import { Content, MessageGroup, Message, MessageGroupDate } from './styles'

function ChatMessages() {
    const messagesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        /**
         * Initializes Messages with scrollbar sticked to bottom.
         */
        if (messagesRef.current)
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }, [])

    return (
        <>
            <Content ref={messagesRef}>
                <MessageGroup>
                    <MessageGroupDate>
                        <span>22 de Mar de 2021 23:58</span>
                    </MessageGroupDate>

                    <Message type="receiver">
                        <span>Oi, Bolinha!</span>
                    </Message>
                    <Message type="sender">
                        <span>Oi, Bolinha!</span>
                    </Message>
                    <Message type="receiver">
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </span>
                    </Message>
                    <Message type="receiver">
                        <span>Oi, Bolinha!</span>
                    </Message>
                </MessageGroup>
                <MessageGroup>
                    <MessageGroupDate>
                        <span>22 de Mar de 2021 23:58</span>
                    </MessageGroupDate>

                    <Message type="sender">
                        <span>Oi, Bolinha!</span>
                    </Message>
                    <Message type="sender">
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </span>
                    </Message>
                </MessageGroup>
            </Content>
        </>
    )
}

export default ChatMessages
