import styled from 'styled-components'

export const Content = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    overflow-y: scroll;
    background-color: rgba(21, 21, 21, 0.6);
    box-sizing: border-box;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    border: 3px solid ${(props) => props.theme.borderColorPrimary};
    padding: 30px;

    @media (min-width: 600px) {
        padding: 40px 50px;
    }

    @media (min-width: 960px) {
        width: 600px;
        height: auto;
        border-radius: 5px;
        position: initial;
        overflow-y: auto;
    }
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const WrapperForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    /* background: green; */

    form {
        width: 100%;

        .wrapper-input {
            margin-bottom: 40px;
        }

        .form-input-message {
            margin-top: -30px;
            margin-bottom: 25px;
        }

        .form-btn {
            width: 100%;
            height: 50px;
            margin-top: 10px;
        }
    }

    @media (min-width: 600px) {
        form {
            width: 360px;
        }
    }

    @media (min-width: 960px) {
        form {
            width: 300px;
        }
    }
`
