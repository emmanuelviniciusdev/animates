import styled from 'styled-components'

export const Content = styled.div`
    /* background-color: green; */
    width: 100%;
    height: 400px;
    display: flex;
    margin-bottom: 50px;
    flex-direction: column;
    justify-content: flex-end;

    /* Mobile screens */
    @media (min-height: 640px) and (max-width: 1279px) {
        height: 450px;
    }

    @media (min-height: 700px) and (max-width: 1279px) {
        height: 70vh;
    }

    @media (min-height: 800px) and (max-width: 1279px) {
        height: 75vh;
    }

    @media (min-height: 1000px) and (max-width: 1279px) {
        height: 80vh;
    }

    @media (min-height: 1300px) and (max-width: 1279px) {
        height: 85vh;
    }

    /* Not mobile screens */
    @media (min-height: 600px) and (min-width: 1280px) {
        height: 350px;
    }

    @media (min-height: 640px) and (min-width: 1280px) {
        height: 430px;
    }

    @media (min-height: 700px) and (min-width: 1280px) {
        height: 65vh;
    }

    @media (min-height: 800px) and (min-width: 1280px) {
        height: 67vh;
    }

    @media (min-height: 1000px) and (min-width: 1280px) {
        height: 75vh;
    }

    @media (min-height: 1300px) and (min-width: 1280px) {
        height: 80vh;
    }
`
