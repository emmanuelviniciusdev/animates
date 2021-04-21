import React, { useEffect } from 'react'
import Menu from '../../components/Menu'
import PageTitle from '../../components/PageTitle'
import ChatInput from '../../components/ChatInput'
import { setPageTitle } from '../../shared/helpers'
import { GeneralContent } from '../../styles/commonStyles'
import { Content } from './styles'

function Chat() {
    useEffect(() => setPageTitle('Bolinha'), [])

    return (
        <>
            <header>
                <Menu />
            </header>

            <GeneralContent>
                <PageTitle applyFontWeightRegular>
                    <>
                        Chat com <b>Bolinha</b>
                    </>
                </PageTitle>

                <main>
                    <Content>
                        <ChatInput />
                    </Content>
                </main>
            </GeneralContent>
        </>
    )
}

export default Chat
