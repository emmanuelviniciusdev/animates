import React, { useEffect } from 'react'
import Menu from '../../components/Menu'
import PageTitle from '../../components/PageTitle'
import ChatComponent from '../../components/Chat'
import { setPageTitle } from '../../shared/helpers'
import { GeneralContent } from '../../styles/commonStyles'

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
                    <ChatComponent />
                </main>
            </GeneralContent>
        </>
    )
}

export default Chat
