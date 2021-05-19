import React, { useCallback, useState } from 'react'
import {
    NoPicturesFound,
    ActionUpload,
    WrapperActionUpload,
    WrapperGallery,
} from './styles'
import { Icon } from '@iconify/react'
import cameraDuotone from '@iconify/icons-ph/camera-duotone'
import imageDuotone from '@iconify/icons-ph/image-duotone'
import fileArrowUpFill from '@iconify/icons-ph/file-arrow-up-fill'
import Gallery from '../Gallery'
import { useDropzone } from 'react-dropzone'

function ActionUploadDragContentNotDragging() {
    return (
        <>
            <Icon icon={imageDuotone} className="icon" />
            <p>
                fazer upload de novas fotos <b>clicando aqui</b> ou{' '}
                <b>arrastando e soltando</b> os arquivos para cá
            </p>
        </>
    )
}

function ActionUploadDragContentDragging() {
    return (
        <>
            <Icon icon={fileArrowUpFill} className="icon" />
            <p>
                <b>Pode soltar!</b>
            </p>
        </>
    )
}

function GalleryProfileSettings() {
    const [openActionUpload, setOpenActionUpload] = useState(false)

    const onDropPhotos = useCallback((files) => {
        // TODO: Handle and mock upload.
        console.log(files)
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: onDropPhotos,
        accept: 'image/*',
    })

    return (
        <>
            <NoPicturesFound>Nenhuma foto encontrada</NoPicturesFound>

            <WrapperGallery>
                <Gallery
                    mode="account-settings"
                    onOpenUploadSection={setOpenActionUpload}
                />
            </WrapperGallery>

            {openActionUpload && (
                <WrapperActionUpload>
                    <ActionUpload type="device-camera">
                        <Icon icon={cameraDuotone} className="icon" />
                        <p>
                            clique aqui para adicionar novas fotos utilizando a{' '}
                            <b>câmera do dispositivo</b>
                        </p>
                    </ActionUpload>

                    <ActionUpload type="files" {...getRootProps()}>
                        <input {...getInputProps()} />

                        {isDragActive && <ActionUploadDragContentDragging />}

                        {!isDragActive && (
                            <ActionUploadDragContentNotDragging />
                        )}
                    </ActionUpload>
                </WrapperActionUpload>
            )}
        </>
    )
}

export default GalleryProfileSettings
