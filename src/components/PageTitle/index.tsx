import React from 'react'
import { HeadingLevels, Props } from './types'
import {
    ContentNotification,
    Line,
    Notifications,
    WrapperPageTitle,
} from './styles'

function PageTitle({
    type = 'h1',
    lineWidth = 'smallerThanContent',
    notifications,
    applyFontWeightRegular = false,
    children,
}: Partial<Props>) {
    const HeadingTag = `${type}` as HeadingLevels

    return (
        <>
            <WrapperPageTitle
                className="wrapper-page-title"
                applyFontWeightRegular={applyFontWeightRegular}
            >
                <HeadingTag>
                    <span className="main-heading-content">{children}</span>

                    {notifications && (
                        <Notifications>
                            <ContentNotification>
                                <span>{notifications}</span>
                            </ContentNotification>
                        </Notifications>
                    )}
                </HeadingTag>

                <Line lineWidth={lineWidth} />
            </WrapperPageTitle>
        </>
    )
}

export default PageTitle
