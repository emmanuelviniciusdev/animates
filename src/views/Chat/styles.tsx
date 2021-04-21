import styled from 'styled-components'

export const Content = styled.div`
    /* background-color: green; */
    width: 100%;
    height: 400px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media (min-height: 640px) {
        height: 450px;
    }

    @media (min-height: 660px) {
        height: 60vh;
    }

    @media (min-height: 900px) and (max-width: 1279px) {
        height: 79vh;
    }
`
