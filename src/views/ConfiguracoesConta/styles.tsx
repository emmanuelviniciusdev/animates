import styled from 'styled-components'

export const Section = styled.section`
    margin-bottom: 70px;

    button {
        margin-right: 15px;
        margin-bottom: 15px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    @media (min-width: 600px) {
        button {
            margin-bottom: 0;
        }
    }
`
