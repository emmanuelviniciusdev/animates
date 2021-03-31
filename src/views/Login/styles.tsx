import { createGlobalStyle } from 'styled-components'
import dogAndCat1 from '../../assets/images/dog-and-cat-1.png'

export const LocalGlobalStyle = createGlobalStyle`
    body {
        background: url(${dogAndCat1}) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
`
