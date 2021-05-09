import React from 'react'
import { FakeTextarea } from './styles'

function ChatInput() {
    return (
        <>
            {/* The placeholder is being applied by CSS */}
            <FakeTextarea contentEditable placeholder="Aa" />
        </>
    )
}

export default ChatInput
