import styled from 'styled-components'

export const Form = styled.form`
    .wrapper-input,
    textarea {
        margin-bottom: 40px;
    }

    @media (min-width: 600px) {
        width: 350px;
    }
`

export const Textarea = styled.textarea`
    background-color: transparent;
    color: #fff;
    outline: none;
    border: none;
    border-bottom: solid 2px ${(props) => props.theme.bgPrimary};
    width: 100%;
    height: 120px;
    resize: none;
    font-size: 16px;
`

export const WrapperInputCheckbox = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
`
