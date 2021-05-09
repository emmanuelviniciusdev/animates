import React from 'react'
import {
    NoPicturesFound,
    ActionUpload,
    WrapperActionUpload,
    WrapperGallery,
} from './styles'
import { Icon } from '@iconify/react'
import cameraDuotone from '@iconify/icons-ph/camera-duotone'
import imageDuotone from '@iconify/icons-ph/image-duotone'

import Gallery from '../Gallery'

function GalleryProfileSettings() {
    return (
        <>
            <NoPicturesFound>Nenhuma foto encontrada</NoPicturesFound>

            <WrapperGallery>
                <Gallery mode="account-settings" />
            </WrapperGallery>

            <WrapperActionUpload>
                <ActionUpload type="device-camera">
                    <Icon icon={cameraDuotone} className="icon" />
                    <p>
                        clique aqui para adicionar novas fotos utilizando a{' '}
                        <b>câmera do dispositivo</b>
                    </p>
                </ActionUpload>
                <ActionUpload type="files">
                    <Icon icon={imageDuotone} className="icon" />
                    <p>
                        fazer upload de novas fotos <b>clicando aqui</b> ou{' '}
                        <b>arrastando e soltando</b> os arquivos para cá
                    </p>
                </ActionUpload>
            </WrapperActionUpload>
        </>
    )
}

export default GalleryProfileSettings
