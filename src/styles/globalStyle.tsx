import { createGlobalStyle } from 'styled-components'
import InterRegular from '../assets/fonts/Inter/Inter-Regular.woff2'
import InterItalic from '../assets/fonts/Inter/Inter-Italic.woff2'
import InterSemiBold from '../assets/fonts/Inter/Inter-SemiBold.woff2'
import InterSemiBoldItalic from '../assets/fonts/Inter/Inter-SemiBoldItalic.woff2'
import InterBold from '../assets/fonts/Inter/Inter-Bold.woff2'
import InterBoldItalic from '../assets/fonts/Inter/Inter-BoldItalic.woff2'

const GlobalStyle = createGlobalStyle`
    /**
     * It's only imported the fonts that was used during the development of the
     * app interface. 
     */
    @font-face {
        font-family: 'Inter', sans-serif;
        src: url(${InterRegular}) format('woff2');
        font-weight: 400;
    }
    @font-face {
        font-family: 'Inter', sans-serif;
        src: url(${InterItalic}) format('woff2');
        font-weight: 400;
    }
    @font-face {
        font-family: 'Inter', sans-serif;
        src: url(${InterSemiBold}) format('woff2');
        font-weight: 600;
    }
    @font-face {
        font-family: 'Inter', sans-serif;
        src: url(${InterSemiBoldItalic}) format('woff2');
        font-weight: 600;
    }
    @font-face {
        font-family: 'Inter', sans-serif;
        src: url(${InterBold}) format('woff2');
        font-weight: 700;
    }
    @font-face {
        font-family: 'Inter', sans-serif;
        src: url(${InterBoldItalic}) format('woff2');
        font-weight: 700;
    }

    * {
        font-family: 'Inter', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: ${(props) => props.theme.bgDefault};
        color: ${(props) => props.theme.colorPrimary};
    }

    button {
        border: none;
        cursor: pointer;
    }
`

export default GlobalStyle
