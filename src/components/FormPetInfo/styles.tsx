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

    input[type='checkbox'] {
        appearance: none;
        width: 20px;
        height: 20px;
        background-color: ${(props) => props.theme.bgDefault};
        color: ${(props) => props.theme.colorPrimary};
        border: solid 2px ${(props) => props.theme.bgPrimary};
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:checked {
            background-color: ${(props) => props.theme.bgPrimary};
        }

        &:checked:after {
            content: '✔';
        }
    }
`

export const WrapperButtonSave = styled.div`
    margin-top: 30px;
    margin-bottom: 50px;

    button {
        width: 100%;
    }

    @media (min-width: 600px) {
        button {
            width: auto;
        }
    }

    /* @media (min-height: 760px) and (min-width: 1280px) {
        position: fixed;
        margin-bottom: 0;
        bottom: 30px;
        right: 100px;
    } */
`
