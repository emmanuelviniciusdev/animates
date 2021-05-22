import React, { useEffect, useState } from 'react'
import { Props } from './types'
import {
    GalleryContent,
    WrapperImage,
    Image,
    Caption,
    ButtonIcon,
    ButtonOpenUploadSection,
} from './styles'
import { Icon } from '@iconify/react'
import trashDuotone from '@iconify/icons-ph/trash-duotone'
import userCircleDuotone from '@iconify/icons-ph/user-circle-duotone'
import arrowDownBold from '@iconify/icons-ph/arrow-down-bold'
import arrowUpBold from '@iconify/icons-ph/arrow-up-bold'
import ReactTooltip from 'react-tooltip'
import { PlaceholderLoadingItem } from '../../styles/commonStyles'

function Gallery({
    mode = 'card-adocao',
    photos,
    loading = false,
    onOpenUploadSection,
}: Partial<Props>) {
    const [uploadSectionIsOpened, setUploadSectionIsOpened] = useState(true)

    const isAccountSettingsMode = mode === 'account-settings'
    const buttonUploadSectionText = uploadSectionIsOpened
        ? 'Fechar seção de upload'
        : 'Abrir seção de upload'

    useEffect(() => {
        if (onOpenUploadSection) onOpenUploadSection(uploadSectionIsOpened)
    }, [onOpenUploadSection, uploadSectionIsOpened])

    return (
        <>
            <ReactTooltip id="tooltip-gallery" place="bottom" effect="solid" />

            <GalleryContent>
                {isAccountSettingsMode && (
                    <div>
                        <ButtonOpenUploadSection
                            aria-label={buttonUploadSectionText}
                            onClick={() => {
                                setUploadSectionIsOpened((state) => !state)
                                ReactTooltip.hide()
                            }}
                        >
                            <Icon
                                icon={
                                    uploadSectionIsOpened
                                        ? arrowUpBold
                                        : arrowDownBold
                                }
                                className="icon"
                            />
                        </ButtonOpenUploadSection>
                    </div>
                )}

                <div>
                    {loading && (
                        <>
                            <WrapperImage>
                                <PlaceholderLoadingItem className="loading-photo" />
                            </WrapperImage>
                            <WrapperImage>
                                <PlaceholderLoadingItem className="loading-photo" />
                            </WrapperImage>
                        </>
                    )}

                    {!loading &&
                        photos &&
                        photos.map((photo, index) => (
                            <WrapperImage key={index}>
                                <Image src={photo.url} alt={photo.petName} />

                                {isAccountSettingsMode && (
                                    <Caption>
                                        <ButtonIcon
                                            data-for="tooltip-gallery"
                                            aria-label="Definir como foto de perfil"
                                            data-tip="Definir como foto de perfil"
                                        >
                                            <Icon
                                                icon={userCircleDuotone}
                                                className="icon"
                                            />
                                        </ButtonIcon>
                                        <ButtonIcon
                                            data-for="tooltip-gallery"
                                            aria-label="Deletar foto"
                                            data-tip="Deletar foto"
                                        >
                                            <Icon
                                                icon={trashDuotone}
                                                className="icon icon-trash"
                                            />
                                        </ButtonIcon>
                                    </Caption>
                                )}
                            </WrapperImage>
                        ))}
                </div>
            </GalleryContent>
        </>
    )
}

export default Gallery
