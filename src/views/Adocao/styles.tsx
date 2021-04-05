import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding-bottom: 80px;

    @media (min-width: 960px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
    }

    @media (min-width: 1280px) {
        width: 1080px;
        margin: 0 auto;
    }
`
