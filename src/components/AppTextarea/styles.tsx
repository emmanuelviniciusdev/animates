import styled from 'styled-components'

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
