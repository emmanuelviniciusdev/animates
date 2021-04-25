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

export const WrapperButtonSave = styled.div`
    margin-bottom: 50px;

    button {
        width: 100%;
    }

    @media (min-width: 600px) {
        button {
            width: auto;
        }
    }

    @media (min-height: 760px) and (min-width: 1280px) {
        position: fixed;
        margin-bottom: 0;
        bottom: 30px;
        right: 100px;
    }
`
