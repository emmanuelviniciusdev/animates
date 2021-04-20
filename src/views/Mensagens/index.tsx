import React, { useEffect } from 'react'
import Menu from '../../components/Menu'
import PageTitle from '../../components/PageTitle'
import Message from '../../components/Message'
import { setPageTitle } from '../../shared/helpers'
import { GeneralContent } from '../../styles/commonStyles'
import {
    PetPictureMatchList,
    MatchList,
    WrapperMessageList,
    MessageList,
} from './styles'
import woofleDog from '../../assets/images/woofle-dog.jpg'
import bolinha from '../../assets/images/bolinha.jpg'
import ReactTooltip from 'react-tooltip'

function Mensagens() {
    useEffect(() => setPageTitle('Mensagens'), [])

    return (
        <>
            <ReactTooltip
                id="tooltip-mensagens"
                place="bottom"
                effect="solid"
            />

            <header>
                <Menu />
            </header>

            <GeneralContent>
                <section>
                    <PageTitle notifications={10}>Novos matches</PageTitle>

                    <MatchList>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <PetPictureMatchList
                                src={woofleDog}
                                alt="Woofle Dog"
                                data-for="tooltip-mensagens"
                                data-tip="Woofle Dog"
                                key={index}
                            />
                        ))}
                    </MatchList>
                </section>

                <main>
                    <WrapperMessageList>
                        <h2>Mensagens</h2>

                        <MessageList>
                            {Array.from({ length: 10 }).map((_, index) => (
                                <Message
                                    name="Bolinha"
                                    lastMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh tortor, congue ut lectus viverra, placerat aliquet tellus. Mauris non ex mattis, gravida enim eget, laoreet velit."
                                    pictureUrl={bolinha}
                                    seen={index % 2 === 0}
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
