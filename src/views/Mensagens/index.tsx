import React, { useCallback, useEffect, useRef, useState } from 'react'
import Menu from '../../components/Menu'
import PageTitle from '../../components/PageTitle'
import Message from '../../components/Message'
import LatestMatchesList from '../../components/LatestMatchesList'
import { setPageTitle, handleRegularErrorMessage } from '../../shared/helpers'
import {
    GeneralContent,
    PlaceholderLoadingItem,
} from '../../styles/commonStyles'
import {
    WrapperMessageList,
    MessageList,
    WrapperLatestMatchesList,
} from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import useThunkDispatch from '../../hooks/useThunkDispatch'
import { getListMessages } from '../../redux/ducks/messages'

function Mensagens() {
    const dispatch = useThunkDispatch()
    const wrapperMessageListRef = useRef<HTMLDivElement>(null)
    const [listMessagesPosition, setListMessagesPosition] = useState(1)

    const {
        latestMatches,
        messages,
        loadingMessages,
        allMessagesLoaded,
    } = useSelector((state: RootState) => state.messages)

    const handleScroll = useCallback(() => {
        if (!wrapperMessageListRef.current) return

        const {
            scrollHeight,
            scrollTop,
            clientHeight,
        } = document.documentElement

        const reachedBottom = scrollHeight - scrollTop === clientHeight

        if (reachedBottom && !loadingMessages)
            setListMessagesPosition((position) => position + 1)
    }, [loadingMessages])

    /**
     * Sets page's title.
     */
    useEffect(() => setPageTitle('Mensagens'), [])

    /**
     * Handles scroll event.
     */
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    /**
     * Loads list of messages.
     */
    useEffect(() => {
        if (!allMessagesLoaded)
            dispatch(getListMessages(listMessagesPosition)).catch((err) =>
                handleRegularErrorMessage(err, 'toast-error-list-messages')
            )
    }, [dispatch, listMessagesPosition, allMessagesLoaded])

    return (
        <>
            <header>
                <Menu />
            </header>

            <GeneralContent>
                <section>
                    <PageTitle notifications={latestMatches.pets.length}>
                        Novos matches
                    </PageTitle>

                    <WrapperLatestMatchesList>
                        <LatestMatchesList />
                    </WrapperLatestMatchesList>
                </section>

                <main>
                    <WrapperMessageList ref={wrapperMessageListRef}>
                        <h2>Mensagens</h2>

                        <MessageList>
                            {messages.map((message, index) => (
                                <Message
                                    key={index}
                                    name={message.whoSent.pet.name}
                                    pictureUrl={message.whoSent.pet.photoUrl}
                                    lastMessage={message.message}
                                    seen={message.seen}
                                />
                            ))}

                            {/* Loading animation */}
                            {loadingMessages &&
                                Array.from({
                                    length: messages.length === 0 ? 2 : 1,
                                }).map((_, index) => (
                                    <PlaceholderLoadingItem
                                        className="loading-message"
                                        key={index}
                                    />
                                ))}
                        </MessageList>
                    </WrapperMessageList>
                </main>
            </GeneralContent>
        </>
    )
}

export default Mensagens
