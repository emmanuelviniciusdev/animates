import axios from 'axios'
import moment from 'moment'
import { toast } from 'react-toastify'

export function setPageTitle(title: string) {
    document.title = title
}

/**
 * Reduces the text size to the desired number of characters.
 *
 * @param text Text to be reduced.
 * @param limitSize Desired character limit.
 */
export function limitTextSize(text: string, limitSize: number) {
    if (text.length <= limitSize) return text

    return text.substr(0, limitSize - 3) + '...'
}

/**
 * Returns a modified instance of axios with the API base URL and authorization access
 * token applied to it.
 */
export function appAxios() {
    const modifiedAxios = axios.create({
        baseURL: process.env.REACT_APP_BASE_API_URL,
        withCredentials: true,
    })

    const accessToken = localStorage.getItem('token')

    if (accessToken) {
        modifiedAxios.defaults.headers.common['x-api-key'] = `${accessToken}`
    }

    return modifiedAxios
}

/**
 * Handles regular error responses of HTTP requests.
 */
export function handleRegularErrorMessage(error: any, toastId: string) {
    const errorMessage = error.response.data.message ?? 'Ocorreu um erro'

    toast.error(errorMessage, {
        role: 'alert',
        toastId,
        autoClose: false,
    })
}

/**
 * Transforms Yup.date() format to "DD/MM/YYYY".
 */
export function transformYupDate(value: Date, originalValue: string) {
    return moment(originalValue, 'DD/MM/YYYY', true).toDate()
}
