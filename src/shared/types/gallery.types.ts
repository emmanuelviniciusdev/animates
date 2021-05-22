export type PhotosFormData = {
    'photos[]': File[]
}

export type Photo = {
    id: number
    url: string
    petName: string
    isProfilePicture: boolean
}
