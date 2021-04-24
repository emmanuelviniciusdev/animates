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
        margin-bottom: 20px;
    }

    @media (min-width: 1280px) {
        &:last-child {
            margin-bottom: 100px;
        }
    }
`

export const WrapperButtonSave = styled.div`
    margin-bottom: 30px;

    button {
        width: 100%;
    }

    @media (min-width: 600px) {
        button {
            width: 350px;
        }
    }

    @media (min-width: 1280px) {
        position: fixed;
        bottom: -15px;
        right: 80px;

        button {
            width: 260px;
        }
    }
`
