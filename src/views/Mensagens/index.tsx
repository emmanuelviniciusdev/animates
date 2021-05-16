import React, { useEffect } from 'react'
import Menu from '../../components/Menu'
import PageTitle from '../../components/PageTitle'
import Message from '../../components/Message'
import LatestMatchesList from '../../components/LatestMatchesList'
import { setPageTitle } from '../../shared/helpers'
import {
    GeneralContent,
    PlaceholderLoadingItem,
} from '../../styles/commonStyles'
import {
    WrapperMessageList,
    MessageList,
    WrapperLatestMatchesList,
} from './styles'
import bolinha from '../../assets/images/bolinha.jpg'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import useThunkDispatch from '../../hooks/useThunkDispatch'
import { getListMessages } from '../../redux/ducks/messages'

function Mensagens() {
    const dispatch = useThunkDispatch()

    const {
        latestMatches,
        messages,
        loadingMessages,
        totalMessages,
    } = useSelector((state: RootState) => state.messages)

    const handleScroll = () => {
        console.log('aaa')
    }

    useEffect(() => {
        setPageTitle('Mensagens')

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        // TODO: Catch errors.
        dispatch(getListMessages())
    }, [dispatch])

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
                    <WrapperMessageList>
                        <h2>Mensagens</h2>

                        <MessageList>
                            {/* First loading animation */}
                            {loadingMessages && messages.length === 0 && (
                                <>
                                    <PlaceholderLoadingItem className="loading-message" />
                                    <PlaceholderLoadingItem className="loading-message" />
                                </>
                            )}

                            {messages.map((message, index) => (
                                <Message
                                    key={index}
                                    name={message.whoSent.pet.name}
                                    pictureUrl={message.whoSent.pet.photoUrl}
                                    lastMessage={message.message}
                                    seen={message.seen}
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
