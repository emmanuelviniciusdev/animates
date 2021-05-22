import React, { useCallback, useEffect, useState } from 'react'
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
import { appAxios, handleRegularErrorMessage } from '../../shared/helpers'
import { Photo } from '../../shared/types/gallery.types'
import LoadingSpinner from '../LoadingSpinner'

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
    const [photos, setPhotos] = useState<Photo[]>([])
    const [loadingPhotos, setLoadingPhotos] = useState(false)
    const [loadingUploadPhotos, setLoadingUploadPhotos] = useState(false)

    const onDropPhotos = useCallback((files: File[]) => {
        const formData = new FormData()

        files.forEach((file) => formData.append('photos[]', file))

        setLoadingUploadPhotos(true)

        appAxios()
            .post('photos/upload', formData)
            .then((res) =>
                setPhotos((photos) => [...res.data.data.photos, ...photos])
            )
            .catch((err) =>
                handleRegularErrorMessage(
                    err,
                    'toast-error-gallery-profile-settings'
                )
            )
            .finally(() => setLoadingUploadPhotos(false))
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: onDropPhotos,
        accept: 'image/*',
    })

    /**
     * Loads pet's photos.
     */
    useEffect(() => {
        setLoadingPhotos(true)

        appAxios()
            .get('photos')
            .then((res) => setPhotos(res.data.data.photos))
            .catch((err) =>
                handleRegularErrorMessage(
                    err,
                    'toast-error-gallery-profile-settings'
                )
            )
            .finally(() => setLoadingPhotos(false))
    }, [])

    return (
        <>
            <NoPicturesFound>Nenhuma foto encontrada</NoPicturesFound>

            <WrapperGallery>
                <Gallery
                    mode="account-settings"
                    photos={photos}
                    loading={loadingPhotos}
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

                    {loadingUploadPhotos && (
                        <ActionUpload type="files" disabled>
                            <LoadingSpinner backgroundColor="#CCC" />
                        </ActionUpload>
                    )}

                    {!loadingUploadPhotos && (
                        <ActionUpload type="files" {...getRootProps()}>
                            <input {...getInputProps()} />

                            {isDragActive && (
                                <ActionUploadDragContentDragging />
                            )}

                            {!isDragActive && (
                                <ActionUploadDragContentNotDragging />
                            )}
                        </ActionUpload>
                    )}
                </WrapperActionUpload>
            )}
        </>
    )
}

export default GalleryProfileSettings
