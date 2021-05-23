import React, { useEffect, useState } from 'react'
import { Props } from './types'
import {
    GalleryContent,
    WrapperImage,
    Image,
    Caption,
    ButtonIcon,
    ButtonOpenUploadSection,
    NoPicturesFound,
} from './styles'
import { Icon } from '@iconify/react'
import trashDuotone from '@iconify/icons-ph/trash-duotone'
import userCircleDuotone from '@iconify/icons-ph/user-circle-duotone'
import xBold from '@iconify/icons-ph/x-bold'
import cloudArrowUpDuotone from '@iconify/icons-ph/cloud-arrow-up-duotone'
import ReactTooltip from 'react-tooltip'
import { PlaceholderLoadingItem } from '../../styles/commonStyles'

function Gallery({
    mode = 'card-adocao',
    photos,
    loading = false,
    onOpenUploadSection,
}: Partial<Props>) {
    const [uploadSectionIsOpened, setUploadSectionIsOpened] = useState(false)

    const isAccountSettingsMode = mode === 'account-settings'
    const buttonUploadSectionText = uploadSectionIsOpened
        ? 'Fechar seção de upload'
        : 'Fazer upload de novas fotos'

    /**
     * Handles upload section's opening.
     */
    useEffect(() => {
        if (onOpenUploadSection) onOpenUploadSection(uploadSectionIsOpened)
    }, [onOpenUploadSection, uploadSectionIsOpened])

    /**
     * Rebuilds "ReactTooltip" whenever "photos" or "loading" props change.
     */
    useEffect(() => {
        ReactTooltip.rebuild()
    }, [photos, loading])

    return (
        <>
            <ReactTooltip id="tooltip-gallery" place="bottom" effect="solid" />

            <GalleryContent>
                {isAccountSettingsMode && (
                    <div>
                        <ButtonOpenUploadSection
                            aria-label={buttonUploadSectionText}
                            data-for="tooltip-gallery"
                            data-tip={buttonUploadSectionText}
                            onClick={() => {
                                setUploadSectionIsOpened((state) => !state)
                                ReactTooltip.rebuild()
                            }}
                        >
                            <Icon
                                icon={
                                    uploadSectionIsOpened
                                        ? xBold
                                        : cloudArrowUpDuotone
                                }
                                className="icon"
                            />
                        </ButtonOpenUploadSection>
                    </div>
                )}

                <div>
                    {!loading && (!photos || photos.length === 0) && (
                        <NoPicturesFound>
                            Nenhuma foto encontrada
                        </NoPicturesFound>
                    )}

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
