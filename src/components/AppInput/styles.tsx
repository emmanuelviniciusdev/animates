import styled from 'styled-components'

export const WrapperInput = styled.div``

export const WrapperInputAndIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    .icon {
        font-size: 35px;
        color: ${(props) => props.theme.colorPrimary};
    }
`

export const Input = styled.input`
    background-color: transparent;
    color: ${(props) => props.theme.colorPrimary};
    border: none;
    outline: none;
    font-size: 16px;
    width: 100%;
    height: 35px;
`

export const Line = styled.div`
    height: 2px;
    background-color: ${(props) => props.theme.bgPrimary};
    margin-top: 5px;
`
