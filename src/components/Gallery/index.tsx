import React from 'react'
import { Props } from './types'
import {
    GalleryContent,
    WrapperImage,
    Image,
    Caption,
    ButtonIcon,
    ButtonOpenPictureUpload,
} from './styles'
import tobby from '../../assets/images/tobby.jpg'
import { Icon } from '@iconify/react'
import trashDuotone from '@iconify/icons-ph/trash-duotone'
import userCircleDuotone from '@iconify/icons-ph/user-circle-duotone'
import plusBold from '@iconify/icons-ph/plus-bold'

function Gallery({ mode = 'card-adocao' }: Partial<Props>) {
    const isAccountSettingsMode = mode === 'account-settings'

    return (
        <>
            <GalleryContent>
                {isAccountSettingsMode && (
                    <div>
                        <ButtonOpenPictureUpload aria-label="Abrir seção de upload">
                            <Icon icon={plusBold} className="icon" />
                        </ButtonOpenPictureUpload>
                    </div>
                )}

                <div>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <WrapperImage key={index}>
                            <Image src={tobby} alt="Foto do(a) Tobby" />

                            {isAccountSettingsMode && (
                                <Caption>
                                    <ButtonIcon aria-label="Definir como foto de perfil">
                                        <Icon
                                            icon={userCircleDuotone}
                                            className="icon"
                                        />
                                    </ButtonIcon>
                                    <ButtonIcon aria-label="Deletar foto">
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
