import styled from 'styled-components'

export const Content = styled.section`
    h3 {
        font-weight: 400;
    }

    p {
        font-size: 18px;
    }
`

export const SubContent = styled.div`
    margin-bottom: 50px;

    &:last-child {
        margin-bottom: 30px;
    }

    @media (min-height: 761px) and (min-width: 1280px) {
        &:last-child {
            margin-bottom: 50px;
        }
    }
`
