import styled from 'styled-components'

export const Content = styled.div`
    width: 600px;
    background-color: rgba(21, 21, 21, 0.6);
    box-sizing: border-box;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    border: 3px solid ${(props) => props.theme.borderColorPrimary};
    border-radius: 5px;
    padding: 50px;
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
`

export const Form = styled.form`
    .wrapper-input {
        margin-bottom: 40px;
    }

    .form-btn {
        width: 100%;
    }
`
