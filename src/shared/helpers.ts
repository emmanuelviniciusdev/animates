import axios from 'axios'

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
    })

    const accessToken = localStorage.getItem('token')

    if (accessToken) {
        modifiedAxios.defaults.headers.common[
            'Authorization'
        ] = `Bearer ${accessToken}`
    }

    return modifiedAxios
}
