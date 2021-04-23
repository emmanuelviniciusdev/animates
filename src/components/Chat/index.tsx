import React from 'react'
import { Content } from './styles'
import ChatInput from '../ChatInput'
import ChatMessages from '../ChatMessages'

function Chat() {
    return (
        <>
            <Content>
                <ChatMessages />
                <ChatInput />
            </Content>
        </>
    )
}

export default Chat
